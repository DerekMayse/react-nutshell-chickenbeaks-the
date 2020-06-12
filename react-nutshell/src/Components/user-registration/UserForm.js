import React, { Component } from "react";
import UserRegistation from "../../modules/UserRegistration";

class UserForm extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    username: "",
    password: "",
    loadingStatus: false,
  };
  

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewUser = (evt) => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const users = {
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        
      };
      
      console.log(users);
      UserRegistation.post(users).then().then(() =>
        this.props.history.push("/home")
      );
    }
  };
  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/home")
  }

  
  render() {
    return (
      <>
      <h1>Account Registration</h1>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="name"
                placeholder="Name"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="address"
                placeholder="Address"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="username"
                placeholder="UserName"
              />

              <input
                type="password"
                required
                onChange={this.handleFieldChange}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewUser && this.handleLogin} 
              >
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default UserForm;
