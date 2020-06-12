import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import './TaskForm.css'

class TaskEditForm extends Component {
    //Sending in task name from TaskList
    state= {
        taskName: this.props.task.name
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // Function that collects edited object to be passed to handleUpdate function in TaskList
    // Main key of inline edit- actually edit whatever property of the existing object that is being passed in from TakList
    makeEditedTask = () =>{
        if (this.state.taskName === ""){
            window.alert("Please input a task name");
        } else{
        const editedTask = {
            id: this.props.task.id,
            name: this.state.taskName,
            dueDate: this.props.task.dueDate,
            isCompleted: this.props.task.isCompleted,
            userId: this.props.task.userId,
        };
        console.log(editedTask)
        this.props.handleUpdate(editedTask)
        }
    }

    // Inline edit Form that appears on the TaskList page; pay attention to value and onClick functionality
    render(){

        return(
            <>
             <Container className="inline-edit-form"><br />
                <Form >
                    <Form.Group>
                        <Form.Label>Task Name: </Form.Label>
                        <Form.Control type="text" id="taskName" required
                            onChange={this.handleFieldChange} value={this.state.taskName} placeholder="i.e. Clean dishes" onKeyDown={this.handleKeyDown}/>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Due: {this.props.task.dueDate}
                    </Form.Text>
                
                <div className="button-row">
                    <Button className="cancel-btn" variant="warning" type="button" onClick={() => this.props.handleEditID("")}>
                        Cancel
                    </Button>
                    <Button className="submit-btn" variant="success" type="submit" onClick={() => this.makeEditedTask()}>
                        Submit Changes
                    </Button>
                </div>

                </Form>
             </Container>
            </>
        )
    }
}

export default TaskEditForm