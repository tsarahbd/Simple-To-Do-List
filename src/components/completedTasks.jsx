import React, { Component } from 'react';

class CompletedTasks extends Component {
   
    render(){
        return (
            <div>                             
                    {this.props.tasks.map(task => 
                        task.status==="completed" &&   
                                           
                     <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input onChange={()=>this.props.handleUnchecked(this.props.tasks.indexOf(task))} className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" checked />
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox" value={task.desc} disabled />
                        <button onClick={()=>this.props.handleDelete(this.props.tasks.indexOf(task))} type="button" className="btn btn-outline-danger">Remove</button>
                    </div>
                    )}                
            </div>               
            
        );
    }

}

export default CompletedTasks;