import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager";
import { Form, Button } from 'react-bootstrap'

class NewsForm extends Component {
  state = {
    title: "",
    synopsis: "",
    url: "",
    loadingStatus: false,
  };

  uniquecheck = () => {
    
  }
  
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewArticle = (evt) => {
    evt.preventDefault();
    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const article = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url,
        date:`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
        userId: 2
      };
     console.log(article)
      NewsManager.post(article).then(() => this.props.history.push("/news"));
    }
  };

  render() {
    return (
      <>
       
<Form>
  <Form.Group controlId="formBasicEmail">
    
    
    <Form.Control type="text" placeholder="Article Title"  onChange={this.handleFieldChange}
                
                id="title"/>
  </Form.Group>
  <Form.Group>
 
    <Form.Control    onChange={this.handleFieldChange}
                placeholder="Story Synopsis"
                id="synopsis"/>
  </Form.Group>
  <Form.Group>
  
    <Form.Control onChange={this.handleFieldChange}
                placeholder="Site URL"
                id="url"/>
  </Form.Group>


  <Button variant="primary" type="submit"disabled={this.state.loadingStatus}
                onClick={this.constructNewArticle} >
    Save
  </Button>
  </Form>
  </>

      
    );
  }
}

export default NewsForm;
