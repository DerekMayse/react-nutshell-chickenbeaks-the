import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import { Form, Container } from 'react-bootstrap'
import LoginManager from '../../modules/LoginManager'
import './Login.css'

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: ""
  }


  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
   LoginManager.loginAccount(this.state.email).then(user => {
    // console.log(user)
    // console.log(user[0].id);
    // console.log(user[0].password);
    if(user.length === 0){
        window.alert(`I'm sorry! The email you entered is not in our system. Please try again!`)
    }else{
        if (this.state.password === user[0].password){
            localStorage.setItem("userId", user[0].id);
            localStorage.setItem("userName", user[0].username);
            localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
        this.props.history.push("/home");

        }
        else{
            window.alert(`I'm sorry! The password you entered does not exist with the email: ${this.state.email}  Please try again!`)
        }
    }
    
  })

    //redirect to page user clicked on
    // this.props.history.goBack();
    //redirect to home page
  }


  render() {

    return (
      <>
      <br />
        <Container className="login-form center">
          <h2 className="login-heading">Welcome to Nutshell!<br/><small>Please sign in</small></h2>
            <Form onSubmit={this.handleLogin}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" onChange={this.handleFieldChange} placeholder="Enter email" required="" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" onChange={this.handleFieldChange} placeholder="Password" required=""/>
              </Form.Group>
              <div className="button-row">
                <Button variant="outline-success" type="submit">Submit </Button>
              </div>           
            </Form>
          </Container>
      </>
      
    )
  }

}

export default Login