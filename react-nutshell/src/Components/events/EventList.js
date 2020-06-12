import React, { Component } from 'react';
import EventPage from './EventPage';
import EventManager from '../../modules/EventManager';
import './EventPage.css';

class EventList extends Component {
	state = {
		events: []
	};

	componentDidMount() {
		EventManager.getAll().then((events) => {
			this.setState({
				events: events
			});
		});
	}

	deleteEvent = (id) =>  {
		EventManager.delete(id).then(() => {
			EventManager.getAll().then((newEvents) => {
				this.setState({
					events: newEvents
				});
			});
		});
	};

	render() {
		return (
			<React.Fragment>
				<section id="event-page">
					<button
						type="button"
						className="new-post-btn"
						onClick={() => {
							this.props.history.push('/events/new');
						}}
					>
						New Event
					</button>
				</section>
				<div id="event-container">
					{this.state.events.map((event) => (
						<EventPage key={event.id} event={event} deleteEvent={this.deleteEvent} {...this.props}/>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default EventList;
