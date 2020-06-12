import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Nutshell</h1>
        <Link to={`/register-account`}>Register An Account?</Link>
        <p>or</p>
        <h3>Login</h3>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="username"
                placeholder="Username"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="alignRight">
              <button type="button">Login</button>
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
