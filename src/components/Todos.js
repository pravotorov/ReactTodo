import React from 'react'

const setTodoList = ({ todos, deleteTodo, changheMark,changeItem }) => {

    
    const todoList = todos.length ? (
        todos.map(todo => {
            return ( 
                <div className="collection-item" >
                    <span onClick={() => changheMark(todo.id,todo.prop)} class="left" >
                        {todo.prop ? (<i class="left material-icons">done</i>) : (<i></i>)}</span>
                    <span onClick={() => changheMark(todo.id,todo.prop)} class="pink-text">{todo.content}</span>
                
                    <i class="right material-icons" onClick={() => deleteTodo(todo.id)}>delete</i>
                    <i class="right material-icons" onClick={() => changeItem(todo.id)}>create</i>
                </div>)
        })
    
    ) : (
            <p className="center">You have no todo's !</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default setTodoList
