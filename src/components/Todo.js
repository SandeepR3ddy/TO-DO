import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state =
        {
             tasks : [{id:1,txt:"text1"},{id:2,txt:"text2"},{id:3,txt:"text3"}],
            currentTask : ''
        }
    }
    handleChange = (e) => {
        this.setState({currentTask:e.target.value});
    }
    onSubmit = () =>{
     //   this.state.tasks.push({id:this.state.tasks.length+1,txt : this.state.currentTask});
      // this.state.currentTask = '';
    let newArr = [...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currentTask}];
    this.setState({
        tasks:newArr,
        currentTask : ''
    })
    }
    onDelete = (id) =>{
        let newAra = this.state.tasks.filter(task =>
        {
            return task.id!=id;
    })
    this.setState({
        tasks:newAra
    })
    }
    render() {
       
        return (
            <div>
               <div className = 'input-container'>
                   <input type = "text" value = {this.state.currentTask} onChange = {this.handleChange}></input>
                   <button onClick = {this.onSubmit}>add</button>
               </div>
                <div className = 'tasks-container'>
                        <ul>
                            {this.state.tasks.map(task => (
                               <li key = {task.id}>
                                    <h1>{task.txt}</h1>
                                    <button onClick  = {()=>this.onDelete(task.id)}>delete</button>
                                </li> 
                            ))}
                        </ul>
                </div>
            </div>
        )
    }
}
