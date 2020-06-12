import React, { Component } from 'react';
import { Container, Button, Card } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
	render() {
		return (
			<Container><br /><br />
				<div className="home-intro">
				<h1>Welcome, <em>{localStorage.getItem("userName")}</em>!</h1>
				<p>
					Thank you for choosing Nutshell to help organize your day!<br/>
					You'll find helpful cards below describing how to use each page.
				</p>
				</div><hr />
				<Container className="card-container">
					<Card className="news-card" style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>News</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary" onClick={() => this.props.history.push("/news")}>Visit Page</Button>
						</Card.Body>
					</Card>
					<Card className="tasks-card" style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>Tasks</Card.Title>
							<Card.Text>
							<small>* Add a task to your task list to keep track of everything you have to do in your busy life.<br />* Completing your tasks like a bawse? Click on the checkbox to the left of the task you completed to remove it from the list..and your mind.<br/>* Edit a task by selecting its name.</small>
							</Card.Text>
							<Button variant="primary" onClick={() => this.props.history.push("/tasks")}>Visit Page</Button>
						</Card.Body>
					</Card>
					<Card className="events-card" style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>Events</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary" onClick={() => this.props.history.push("/events")}>Visit Page</Button>
						</Card.Body>
					</Card>
					<Card className="messages-card" style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>Messages</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary" onClick={() => this.props.history.push("/messages")}>Visit Page</Button>
						</Card.Body>
					</Card>
				</Container>
			</Container>
		);
	}
}

export default Home;
