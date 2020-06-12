import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';
import { Button, Container, Form } from 'react-bootstrap'
import './TaskForm.css'

class TaskForm extends Component {
    state = {
        taskName: "",
        due: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === "" || this.state.completionDate === "") {
            window.alert("Please input a task name and a due date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                name: this.state.taskName,
                dueDate: this.state.due,
                isCompleted: false,
                userId: localStorage.getItem("userId"),
            };

            TaskManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
             <Container className="add-newTask-form"><br />
                <h2 className="form-title">Add a New Task</h2><br />
            <Form>
                <Form.Group>
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control type="text" id="taskName" required
                        onChange={this.handleFieldChange} placeholder="i.e. Clean dishes" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>To Be Completed by: </Form.Label>
                    <Form.Control type="date" id="due" required
                        onChange={this.handleFieldChange} placeholder="mm/dd/yyyy" />
                </Form.Group>
            
                <div className="button-row">
                    <Button className="cancel-btn" variant="warning" type="button" onClick={() => this.props.history.push("/tasks")}>
                        Cancel
                    </Button>
                    <Button className="submit-btn" variant="success" type="submit" disabled={this.state.loadingStatus} onClick={this.constructNewTask}>
                        Submit
                    </Button>
                </div>

            </Form>
            </Container>
        </>
        )
    }
}

export default TaskForm