import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Form, Container } from "react-bootstrap";
import "./Messages.css";

class NewMessageArea extends Component {
  
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }
  
    render() {
    return (
      <>
        <Container className="new-message-form">
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="New Message" />
          </Form.Group>
        </Container>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Send
          </Button>{" "}
        </div>
      </>
    );
  }
}

export default NewMessageArea;
