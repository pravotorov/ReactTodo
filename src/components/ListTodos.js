import React, { Component } from 'react';
import Todos from './components/Todos';

 
class ListTodos extends Component {
  state = {
    todos: [
      {id:1, content: 'Take a screenshot', prop:true,  },
      {id:2, content: 'Upload on github', prop:false},
      {id:3, content: 'Write a report', prop:false}
    ],
    visibility: 0
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos 
    })
  }



  

  


  render() {
  
    return (
      <div className="todos collection">
      <Todos todos={todos} deleteTodo={this.deleteTodo} changheMark={this.changeMark} visibility={this.state.visibility}/>

      </div>
    );
  }
}

export default ListTodos;
