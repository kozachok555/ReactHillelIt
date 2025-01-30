import TodoList from '../TodoList/TodoList';
import './Main.css'
import React from "react";
import ErrorBoundary from '../../ErrorBoundary';
function Main(){
    return(
        <div className='Main'>
            <ErrorBoundary>
                <TodoList/>
            </ErrorBoundary>
        </div>
    )
}
export default Main;