import React, { Component } from 'react';
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'
import { Button,Container } from 'react-bootstrap'

class TaskList extends Component{
    state = {
        tasks: [],
        editID: "",
        loadingStatus: false
    }
    
    handlePatch = (id) => {
        this.setState({loadingStatus: true})
        console.log(id)
        TaskManager.patch(id)
        TaskManager.getAll()
        .then((tasks)=>{
            console.log(tasks)
            this.setState({
                tasks:tasks
            })
        })   // TODO: refactor to fetch all tasks and set to state
     }

    handleEditID = idToEdit => {
        this.setState({editID: idToEdit})
    }

    componentDidMount(){
        console.log("TaskPage: ComponentDidMount")

        TaskManager.getAll()
        .then((tasks)=>{
            console.log(tasks)
            this.setState({
                tasks:tasks
            })  
        // console.log(tasks.id)
        tasks.forEach(task => {
            console.log("idToEdit", task.id)
        })
            
        })
    }

    render(){
        return(
            <>
            <Container><br />
                <h2>Tasks</h2><hr />
                {this.state.tasks.sort((a,b) => a.dueDate > b.dueDate ? 1:-1).map(task =>
                    <TaskCard key={task.id} task={task} handlePatch={this.handlePatch} handleEditID={this.handleEditID} {...this.props}/>
                )}

                <Button variant="outline-info"type="button"
                onClick={() => {this.props.history.push("/tasks/new")}}>Add New Task</Button>

            </Container>
            </>
        );
    }
}
export default TaskList