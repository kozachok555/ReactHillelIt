import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('text Todo in the document', () => {
  render(<App />);
  const textTodo = screen.getByText(/TODO/i);
  expect(textTodo).toBeInTheDocument();
});
test('input is empty', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/input value/i)
  const addButton = screen.getByRole('button')
  fireEvent.input(input,{
    target: {value: ''}
  })
  const textHelloWorld = screen.getByText(/typing/i);
  expect(textHelloWorld).toBeInTheDocument();
  fireEvent.click(addButton)
});
test('input added to the list',() =>{
  render(<App />);
  const input = screen.getByPlaceholderText(/input value/i)
  const addButton = screen.getByRole('button')
  fireEvent.input(input,{
    target: {value: 'dwad13dl'}
  })
  fireEvent.click(addButton)
  expect(screen.getByText(/dwad13dl/i)).toBeInTheDocument();
})
test('have letters and numbers',()=>{
  render(<App />);
  const input = screen.getByPlaceholderText(/input value/i)
  const addButton = screen.getByRole('button')
  fireEvent.input(input,{
    target: {value: 'dwad13dl'}
  })
  fireEvent.click(addButton)
  expect(screen.getByText(/dwad13dl/i)).toBeInTheDocument();
})
test("typing will disapeared after the click on button",()=>{
  render(<App />);
  const input = screen.getByPlaceholderText(/input value/i)
  const addButton = screen.getByRole('button')
  fireEvent.input(input,{
    target: {value: 'dawd'}
  })
  const textHelloWorld = screen.getByText(/typing/i);
  expect(textHelloWorld).toBeInTheDocument();
  fireEvent.click(addButton)
  expect(textHelloWorld).toBeInTheDocument();
})