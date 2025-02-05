const express = require('express')
const mongoose = require('mongoose')

const app = express()
const cors = require('cors')
const password = '0X64CXPnb08blNuB';
const MONGOOSE_URI = `mongodb+srv://kz4nkovova:${password}@ne4ngel.vzbw1.mongodb.net/?retryWrites=true&w=majority&appName=ne4ngel`;


app.use(cors());
  
app.use(express.json())

mongoose.connect(MONGOOSE_URI,{})

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
},{versionKey: false})

const TodoModel = mongoose.model('Todos',Schema)

module.exports = TodoModel;

app.get('/todos', async (req,res)=>{
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(404).json({ error: 'Error' });
    }
})

app.get('/todos/:id',async (req,res)=>{
    try {
        const todo = await TodoModel.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.status(404).json({ error: 'Error' });
    }
})

app.post('/todos',async (req,res)=>{
    try {
        const newTodo = new TodoModel(req.body);
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (error) {
        res.status(400).json({ error: 'Error' });
    }
})
app.put('/todos/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = req.body;
        await TodoModel.updateOne({id : id}, todo)
    }catch (error){
        res.status(400).json({error: "Error"})
    }
})

app.delete('/todos/:id', async (req, res) => {
    TodoModel.deleteOne({ id: req.params.id}).then(response=>{
        res.send(response)
    })
});


app.listen(4000, () => {console.log('PORT 4000');});