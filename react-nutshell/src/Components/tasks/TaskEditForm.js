import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';
import { Button, Container, Form } from 'react-bootstrap'
import './TaskForm.css'

class TaskForm extends Component {
    state = {
        taskName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === ""){
            window.alert("Please input a task name");
        } else {
            this.setState({ loadingStatus: true });
            const editedTask = {
                id: this.props.match.params.taskId,
                name: this.state.taskName,
                dueDate: this.unchangedDetails.due,
                isCompleted: this.unchangedDetails.isCompleted,
                userId: this.unchangedDetails.userId,
            };

            TaskManager.update(editedTask)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    unchangedDetails ={}

    componentDidMount() {
        TaskManager.get(this.props.match.params.taskId)
        .then(task => {
            this.unchangedDetails.due = task.dueDate
            this.unchangedDetails.isCompleted = task.isCompleted
            this.unchangedDetails.userId = task.userId
            this.setState({
                taskName: task.name,
                loadingStatus: false
            })
        })
    }

    render(){

        return(
            <>
             <Container className="edit-task-form"><br />
                <h2 className="form-title">Edit Task Details</h2><br />
            <Form>
                <Form.Group>
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control type="text" id="taskName" required
                        onChange={this.handleFieldChange} value={this.state.taskName} placeholder="i.e. Clean dishes" />
                </Form.Group>
            </Form>
                <div className="button-row">
                    <Button className="cancel-btn" variant="warning" type="button" onClick={() => this.props.history.push("/tasks")}>
                        Cancel
                    </Button>
                    <Button className="submit-btn" variant="success" type="submit" disabled={this.state.loadingStatus} onClick={this.updateExistingTask}>
                        Submit Changes
                    </Button>
                </div>
            </Container>
        </>
        )
    }
}

export default TaskForm