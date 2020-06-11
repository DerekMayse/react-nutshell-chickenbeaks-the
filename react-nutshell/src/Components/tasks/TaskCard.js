import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

class TaskCard extends Component {
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId={this.props.task.id}>
                        {this.props.task.isCompleted === false ? 
                        <><Form.Check type="checkbox" label={<section onClick={() => this.props.handleEditID(this.props.task.id)}>{this.props.task.name}</section>} onClick={() => this.props.handlePatch(this.props.task.id)}  />
                        <Form.Text className="text-muted">
                            Due: {this.props.task.dueDate}
                        </Form.Text>
                        </>
                         : ""}
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default TaskCard