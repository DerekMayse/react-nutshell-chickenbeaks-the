import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventPage.css';

class EventEditForm extends Component {
	state = {
		eventName: '',
		userId: '',
		eventDate: '',
		eventLocation: ''
	};
	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};
	updateEvent = (evt) => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedEvent = {
			id: this.props.match.params.eventId,
			userId: this.state.userId,
			name: this.state.eventName,
			location: this.state.eventLocation,
			date: this.state.eventDate
		};
		EventManager.update(editedEvent).then(() => this.props.history.push('/events'));
	};
	componentDidMount() {
		EventManager.get(this.props.match.params.eventId).then((event) => {
			this.setState({
				eventId: event.id,
				userId: event.userId,
				eventName: event.name,
				eventDate: event.date,
				eventLocation: event.location,
				loadingStatus: false
			});
		});
	}
	render() {
		return (
			<React.Fragment>
				<form>
					<fieldset>
						<div className="event-container">
							<div className="event-form">
								<label htmlFor="eventName">Event Name</label>
								<input
									type="text"
									required
									className="form-control"
									onChange={this.handleFieldChange}
									id="eventName"
									value={this.state.eventName}
								/>

								<label htmlFor="eventDate">Event Date</label>
								<input
									type="date"
									required
									className="form-control"
									onChange={this.handleFieldChange}
									id="eventDate"
									value={this.state.eventDate}
								/>

								<label htmlFor="eventLocation">Event Location</label>
								<input
									type="text"
									required
									classLocation="form-control"
									onChange={this.handleFieldChange}
									id="eventLocation"
									value={this.state.eventLocation}
								/>
							</div>
						</div>
						<div className="event-form-btn">
							<button
								className="event-btn"
								type="submit"
								disabled={this.state.loadingStatus}
								onClick={this.updateEvent}
							>
								Save
							</button>
							<button
								className="event-btn"
								type="button"
								onClick={() => {
									this.props.history.push('/events');
								}}
							>
								Cancel
							</button>
						</div>
					</fieldset>
				</form>
			</React.Fragment>
		);
	}
}

export default EventEditForm;
