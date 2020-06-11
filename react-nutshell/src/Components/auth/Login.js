import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Login extends Component {



      
   


    render(){
        return(
            <React.Fragment>
                  <h1>Welcome to Nutshell</h1>
    <Link to={`/register-account`}  >Register Account</Link>
                
            </React.Fragment>
        )}
        }
    
export default Login;