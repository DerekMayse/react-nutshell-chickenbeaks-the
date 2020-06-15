import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import { Form, Container } from 'react-bootstrap'
import LoginManager from '../../modules/LoginManager'
import {Link } from "react-router-dom"
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

//handleLogin function fetches user's information from JSON using email
//   if the email doesn't exist, then an alert will pop up prompting the user to try again
// if the email exists, we then check the password and if the condition is true, we are setting userId, username and credential (email and password) in the localStorage
// then we get redirected to the Home page and the user can click on whatever page they want
// if the email exists, but password doesn't match, then an alert will appear notifying the user that the password doesn't match

  handleLogin = (e) => {
    e.preventDefault()

   LoginManager.loginAccount(this.state.email).then(user => {
    if(user.length === 0){
        window.alert(`I'm sorry! The email you entered is not in our system. Please try again!`)
    } else{
        if (this.state.password === user[0].password){
            localStorage.setItem("userId", user[0].id);
            localStorage.setItem("userName", user[0].name);
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

  }

// rendering the login form

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
              <div className="register-link">     
                <Link  to={`/register-account`}>Register An Account?</Link>
              </div>
            </Form>
          </Container>
      </>
      
    )
  }

}

export default Login
