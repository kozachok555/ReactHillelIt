import {Component} from "react";
import './Smile.css'

const smileArray = [
    {name: "smileOne",label: "😀"},
    {name: "smileTwo",label: "😁"},
    {name: "smileThree",label: "😝"},
    {name: "smileFour",label: "😬"},
    {name: "smileFive",label: "😪"}
]
class SmileItem extends Component{
    render(){
        return <p onClick={this.props.onClick}>{this.props.label}</p>
    }
}
class SmileResults extends Component{
    constructor(props){
        super(props)
        this.state={
            winner: null,
        }
    }
    render(){
        const {smileCounts} = this.props
        return <div>
            <div className="results">
                <p>{smileCounts.smileOne}</p>
                <p>{smileCounts.smileTwo}</p>
                <p>{smileCounts.smileThree}</p>
                <p>{smileCounts.smileFour}</p>
                <p>{smileCounts.smileFive}</p>
            </div>
            <button className="show-results" onClick={()=>{
                this.setState({winner: true})
            }}>
                Show Results
            </button>
            {this.state.winner && <Winner smileCounts={smileCounts}/>}
        </div>
    }
}
class Winner extends Component{
    getWinner(smileCounts){
        const smileCountsArr = Object.entries(smileCounts)
        const [winnerKey, winnerValue] = smileCountsArr.reduce(
            (max, current) => (current[1] > max[1] ? current : max),
            ["", 0]
        );
        return { winnerKey, winnerValue };
    }
    render(){
        const {smileCounts} = this.props;
        const winner = this.getWinner(smileCounts)
        return <div>
           <h2>Результати Голосування:</h2>
           <p>Переможець:</p>
           <div>{smileArray.map(({name,label})=>{
                if(name === winner.winnerKey){
                    return <p>{label}</p>
                }
                })}</div>
            <p>Кілкість голосів: {winner.winnerValue}</p>
        </div>
    }
}
class SmileComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            allowClick: true,
            smileCounts: {
                smileOne: 3,
                smileTwo: 5,
                smileThree: 2,
                smileFour: 1,
                smileFive: 9,
            },
        }
    }
    componentDidMount() {
        const savedCounts = localStorage.getItem("smileCounts");
        if (savedCounts) {
            this.setState({ smileCounts: JSON.parse(savedCounts) });
        }
    }
    saveToLocalStorage = (updatedCounts) => {
        localStorage.setItem("smileCounts", JSON.stringify(updatedCounts));
    };

    voteCount = (smile) =>{
        this.setState((prev) => {
            const updatedCounts = {...prev.smileCounts,[smile]: prev.smileCounts[smile] + 1,};
                return { smileCounts: updatedCounts,/*/ allowClick: false /*/ };
            },
            () => {
                this.saveToLocalStorage(this.state.smileCounts);
            }
        );
    }
    handlerOnClick = (name) =>{
        if(this.state.allowClick === true){   
            this.voteCount(name);
            this.setState({visible: true})
        }
    }
    render(){
        return <div className="SmileComponent">
            <p className="vote-text">Голосування за накращий смайлик</p>
            <div className="smile-list">
                {smileArray.map(({name,label})=>{
                    return <SmileItem onClick={()=>{this.handlerOnClick(name)}} label = {label}/>
                })}
           </div>
            {this.state.visible && <SmileResults smileCounts={this.state.smileCounts}/>}
        </div>
    }
}
export default SmileComponent;