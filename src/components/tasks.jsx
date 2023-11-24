import React, { Component } from 'react';
import Task from './task';

class Tasks extends Component{
    render(){
        return(
            <div className='list-group list-group-flush'>
               {this.props.listTask.map(task=>
               task.status==="active" &&
               <Task 
               key={this.props.listTask.indexOf(task)} 
               task={task} tasks={this.props.listTask} 
               id={this.props.listTask.indexOf(task)} 
               handleUpdate={this.props.handleUpdate}
               handleChecked={this.props.handleChecked}
               handleDelete={this.props.handleDelete}
               />)}
            </div>            
        );
    }
}

export default Tasks;