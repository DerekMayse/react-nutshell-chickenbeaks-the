import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nutshell from './Components/Nutshell';
import Login from './Components/auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

function MainPage(props) {
	return <Nutshell />
}

function LoginPage(props){
	return <Login {...props}/>
}

function CurrentPage(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
	  return <MainPage />;
	}
	return <LoginPage />;
  }

ReactDOM.render(
	<Router>
		<CurrentPage isLoggedIn={true} />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
