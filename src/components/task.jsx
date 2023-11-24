import React, { Component } from 'react';

class Task extends Component{

    changeHandler(id){
        const tasks = [...this.props.tasks];
        tasks[id] = document.getElementById(id).value;     
        this.props.handleUpdate(tasks[id], id);

    }

    handleEnter(e){
        if(e.key==="Enter"){
            e.target.blur();
        }
    }

    render(){
        
        return(
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input onChange={()=>this.props.handleChecked(this.props.id)} className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" />
                </div>
                <input onChange={()=>this.changeHandler(this.props.id)} type="text" className="form-control" aria-label="Text input with checkbox" defaultValue={this.props.task.desc} id={this.props.id} onKeyDown={e=>this.handleEnter(e)} />
                <button onClick={()=>this.props.handleDelete(this.props.id)} type="button" className="btn btn-outline-danger">Remove</button>
            </div>
        );
    }
}

export default Task;