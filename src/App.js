import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

 
class App extends Component {
  state = {
    todos: [
      {id:1, content: 'Take a screenshot', prop:true},
      {id:2, content: 'Upload on github', prop:false},
      {id:3, content: 'Write a report', prop:false},
      {id:4, content: 'Take a screenshot', prop:true},
      {id:5, content: 'Upload on github', prop:false},
      {id:6, content: 'Write a report', prop:true}
    ]
  }
  
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos 
    })
  }

  changeVis = (value) =>{
    console.log(value);
    this.setState({
      visibility : value
    })
  }

  changeMark = (id,prop) =>{
    const todos = this.state.todos.filter(todo =>{
    (todo.id === id) && (todo.prop = !prop)
    return todo 
    });
    this.setState({
      todos 
    })
  }

  changeItem = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos 
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    todo.prop = false;
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  buttonDelete = (bol) =>{  
    const todos = this.state.todos.filter(todo =>{
      return todo.prop !== bol
    });
    this.setState({
       todos
    })
  }
  filterAll = () =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.prop || true;
    });
    this.setState({
      todos
   })
  }

  filterBool = (props) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.prop === props;
    });
    this.setState({
      todos
   })
  }



  render() {
    const {todos} = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center  pink-text">todos</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={todos} deleteTodo={this.deleteTodo} changheMark={this.changeMark}  changeItem={this. changeItem}/>
        <Footer todos={todos} buttonDelete={this.buttonDelete} filterBool={this.filterBool} filterAll={this.filterAll}/>
        

      </div>
    );
  }
}

export default App;
