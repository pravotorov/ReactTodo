import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
           
    render() {

      const {todos} = this.props;
      const itemsleft =  todos.length > 1 ? (todos.length + " items") : (todos.length + " item")
        
        return (
          <div className="footer">
              <p className="left">{itemsleft} left</p>
              <div className="center" id="center-bl">
              <a onClick={() => this.props.filterAll()} id="f-btn" class="pink accent-4 waves-effect waves-light btn">All</a>
              <a onClick={() => this.props.filterBool(false)} id="f-btn" class="pink accent-4 waves-effect waves-light btn">Active</a>
              <a onClick={() => this.props.filterBool(true)} id="f-btn" class="pink accent-4 waves-effect waves-light btn">Completed</a>
              </div>
              <a onClick={() => this.props.buttonDelete(true)} id="f-btn" class="pink accent-4 waves-effect waves-light btn">Clear completed</a>                       
          </div>
        );
      }
}

export default Footer
