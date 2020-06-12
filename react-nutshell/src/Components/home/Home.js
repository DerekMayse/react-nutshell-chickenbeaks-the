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
							<small>* By going to the news page you can keep up to date with your personalized news articles. <br/> * Add new articles and save them for later reading.<br/> * Delete them once they've been read.<br/>* You can also change the title, story synopsis, or even the URL.</small>
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
							<small>* Need to keep track of when all the things are happening in your busy life?That's what this page is for!<br/>* Add an event to your event list, which will sort in order to keep you on top of when what's happening and highlight your upcoming event.<br />* Change of time or an event cancellation? No biggie. You can edit and delete events on this page too.</small>
							</Card.Text>
							<Button variant="primary" onClick={() => this.props.history.push("/events")}>Visit Page</Button>
						</Card.Body>
					</Card>
					<Card className="messages-card" style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>Messages</Card.Title>
							<Card.Text>
							<small>* Chat with your buddies on this page! <br />* Add a message in box at the bottom of the page to see your message submit with a timestamp in the chat box.<br/>* Didn't mean to send that? No problem! Edit or Delete your message by clicking on the appropriate buttons on the message you'd like to change.</small>
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
