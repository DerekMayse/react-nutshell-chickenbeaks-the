import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MessagesManager from "../../modules/MessagesManager";
import MessageCard from "./MessageCard";
import NewMessageArea from "./NewMessageArea";
import MessageEditForm from "./MessageEditForm";
import "./Messages.css";

class MessagesPage extends Component {
  state = {
    messages: [],
    message: "",
    editId: "",
    loadingStatus: false,
  };

  handleCancel() {}
  
  handleEditId = (idToEdit) => {
    this.setState({ editId: idToEdit });
  };


  updateExistingMessage = (editedMessage) => {
    this.setState({ loadingStatus: true });
    MessagesManager.updateMessage(editedMessage).then(() => {
      MessagesManager.getAllMessages().then((messages) => {
        this.setState({
          messages: messages,
          editId: "",
        });
      });
    });
  };

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




  componentDidMount() {
    MessagesManager.getAllMessages().then((messages) => {
      this.setState({
        messages: messages,
      });
    });
  }

  render() {
    return (
      <>
        <Container className="messages-container">
          {this.state.messages.map((message) =>
            this.state.editId !== message.id ? (
                <MessageCard
                key={message.id}
                message={message}
                deleteMessage={this.deleteMessage}
                handleEditId={this.handleEditId}
                {...this.props}
              />

              


            ) : (
                <MessageEditForm 
                key={message.id}
                message={message}
                handleEditId={this.handleEditId}
                handleUpdate={this.updateExistingMessage}
                
              />


            )
          )}
        </Container>

        <Container fixed="bottom" className="new-message-form-container">
          <NewMessageArea />
        </Container>
      </>
    );
  }
}

export default MessagesPage;
