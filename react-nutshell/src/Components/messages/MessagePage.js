import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MessagesManager from "../../modules/MessagesManager";
import MessageCard from "./MessageCard";
import NewMessageArea from "./NewMessageArea";
import "./Messages.css";

class MessagesPage extends Component {
  state = {
    messages: [],
    message: "",
  };

  componentDidMount() {
    MessagesManager.getAllMessages().then((messages) => {
      this.setState({
        messages: messages,
      });
    });
  }

//   componentDidUpdate() {
//     MessagesManager.getAllMessages().then((newMessages) => {
//       this.setState({
//         messages: newMessages,
//       });
//     });
//   }


  deleteMessage = (id) => {
    MessagesManager.deleteMessages(id).then(() => {
      MessagesManager.getAllMessages().then((newMessages) => {
        this.setState({
          messages: newMessages,
        });
      });
    });
  };

  render() {
    return (
      <>
        <Container className="messages-container">
          {this.state.messages.map((message) => (
            <MessageCard
              {...this.props}
              key={message.id}
              message={message}
              deleteMessage={this.deleteMessage}
            />
          ))}
        </Container>

        <Container fixed="bottom" className="new-message-form-container">
          <NewMessageArea />
        </Container>
      </>
    );
  }
}

export default MessagesPage;
