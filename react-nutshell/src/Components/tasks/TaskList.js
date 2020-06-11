import React, { Component } from 'react';
import TaskCard from './TaskCard'
import TaskEditForm from './TaskEditForm'
import TaskManager from '../../modules/TaskManager'
import { Button, Container } from 'react-bootstrap'

class TaskList extends Component {
    state = {
        tasks: [],
        editID: "",
        loadingStatus: false
    }

    handlePatch = (id) => {
        this.setState({ loadingStatus: true })
        console.log(id)
        TaskManager.patch(id).then(() => {
            TaskManager.getAll()
                .then((tasks) => {
                    console.log(tasks)
                    this.setState({
                        tasks: tasks
                    })
                })
        }) 
    }

    handleEditID = idToEdit => {
        this.setState({ editID: idToEdit })
    }


    updateExistingTask = editedTask => {
        // evt.preventDefault();
        
            this.setState({ loadingStatus: true });

            TaskManager.update(editedTask)
            .then(() =>  {     
            TaskManager.getAll()
            .then((tasks) => {
                console.log(tasks)
                this.setState({
                    tasks: tasks,
                    editID : ""
                })
            })
            })
             
    };


    componentDidMount() {
        console.log("TaskPage: ComponentDidMount")

        TaskManager.getAll()
        .then((tasks) => {
            console.log(tasks)
            this.setState({
                tasks: tasks
            })
        })
    }

    render() {
        return (
            <>
                <Container><br />
                    <h2>Tasks</h2><hr />
                    {/* {this.state.tasks.sort((a,b) => a.dueDate > b.dueDate ? 1:-1).map(task =>
                    this.state.editID !== task.id ? <TaskCard key={task.id} task={task} handlePatch={this.handlePatch} handleEditID={this.handleEditID} {...this.props}/> : <TaskEdit key={task.id} task={task}/>
                    )} */}

                    {this.state.tasks.map(task =>
                        this.state.editID !== task.id ? <TaskCard key={task.id} task={task} handlePatch={this.handlePatch} handleEditID={this.handleEditID} {...this.props} /> : <TaskEditForm key={task.id} task={task} handleUpdate={this.updateExistingTask} handleEditID={this.handleEditID}/>
                    )}

                    <Button variant="outline-info" type="button"
                        onClick={() => { this.props.history.push("/tasks/new") }}>Add New Task</Button>

                </Container>
            </>
        );
    }
}
export default TaskList