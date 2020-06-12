import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

//Added Logout link to NavBar that redirects user to "/" page and clears the local storage of the logged in user's information(credentials, userId, username)
class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar sticky="top" bg="dark" variant="dark">
					<Navbar.Brand>Nutshell</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/news">News</Nav.Link>
						<Nav.Link href="/tasks">Tasks</Nav.Link>
						<Nav.Link href="/events">Events</Nav.Link>
						<Nav.Link href="/messages">Messages</Nav.Link>
					</Nav>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<a href="/" onClick={()=> localStorage.clear()}>Logout</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavBar;
