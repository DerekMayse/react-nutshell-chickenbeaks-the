import React, { Component } from "react";
import { Form } from "react-bootstrap";

class MessageEditForm extends Component {
render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control 
          type="text" 
          placeholder="Message"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default MessageEditForm;
