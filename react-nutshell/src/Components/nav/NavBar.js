import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar fixed="top" bg="dark" variant="dark">
					<Navbar.Brand href="#home">Nutshell</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/news">News</Nav.Link>
						<Nav.Link href="/tasks">Tasks</Nav.Link>
						<Nav.Link href="/events">Events</Nav.Link>
						<Nav.Link href="/messages">Messages</Nav.Link>
					</Nav>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavBar;
