import React, { Component } from 'react';

class EventPage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="single-events">
					<h3>Name: {this.props.event.name}</h3>
					<p>Date: {this.props.event.date}</p>
					<p>Location: {this.props.event.location}</p>
					<div className="btn-div">
						<button
							className="event-btn"
							type="button"
							onClick={() => {
								this.props.history.push(`/events/${this.props.event.id}/edit`);
							}}
						>
							Edit
						</button>
						<button
							className="event-btn"
							type="button"
							onClick={() => this.props.deleteEvent(this.props.event.id)}
						>
							Delete
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default EventPage;
