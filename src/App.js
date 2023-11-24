import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks';
import CompletedTasks from './components/completedTasks';

class App extends Component {

  state = {
    tasks: [{desc:"", status:""}],
    data: null
  }

  componentDidMount(){
    fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState({data:data.message}));
  }

  handleAdd = (text) => {
    const tasks = [...this.state.tasks];
    const item = {desc: text, status: "active"};
    tasks.push(item);
    this.setState({tasks});
    document.getElementById("enteredText").value = "";
  }

  handleUpdate = (newText, id) => {
    const tasks = [...this.state.tasks];
    tasks[id] = {desc: newText, status:"active"};
    this.setState({tasks});
  }

  handleEnter = (e) => {
    if(e.key==='Enter'){
      this.handleAdd(document.getElementById("enteredText").value);
    }
  }

  handleChecked = (id) => {
    const tasks = [...this.state.tasks];
    tasks[id].status = "completed";
    this.setState({tasks});
  }

  handleUnchecked = (id) => {
    const tasks = [...this.state.tasks];
    tasks[id].status ="active";
    this.setState({tasks});
  }

  handleDelete = (id) => {
    const tasks = this.state.tasks.filter(task=>this.state.tasks.indexOf(task)!==id);
    this.setState({tasks});
  }

  render(){
    
  return (
    <div className="App container-sm mt-5">
      <h1 className='m-3'>Simple To-Do List</h1>
      <p>{!this.state.data ? "Loading..." : this.state.data}</p>
      {this.state.tasks.length>1 ?
      <Tasks listTask={this.state.tasks} handleUpdate={this.handleUpdate} handleChecked={this.handleChecked} handleDelete={this.handleDelete} /> :
      <p>No tasks listed in the to-do list!</p>}
      <div className="form-floating">
        <input type="text" className="form-control" id="enteredText" onKeyDown={e=>this.handleEnter(e)} placeholder="Enter your to-do" />
        <label htmlFor="enteredText">Enter your to-do</label>
      </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button onClick={()=>this.handleAdd(document.getElementById("enteredText").value)} className="btn btn-primary mt-3 mb-3" type="button">Add Task</button>
    </div>
    {this.state.tasks.length>0 && <CompletedTasks tasks={this.state.tasks} handleUnchecked={this.handleUnchecked} handleDelete={this.handleDelete} />}
    </div>
  );
  }
}

export default App;
