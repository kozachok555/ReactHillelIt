import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyForm = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="MyForm">
      <h2>Todo List</h2>
      <Formik
        initialValues={{ todoName: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.todoName) {
            errors.todoName = 'Required';
          } else if (values.todoName.length < 5) {
            errors.todoName = 'Minimum 5 symb';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setTodoList([...todoList, values.todoName]);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field name="todoName" type="text" placeholder="Task" />
            <ErrorMessage name="todoName" component="div" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div>Todo: {todoList.map((x, index) => (<p key={index}>{x}</p>))}</div>
    </div>
  );
};

export default MyForm;

