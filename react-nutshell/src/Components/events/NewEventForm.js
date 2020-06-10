import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventPage.css';

class NewEventForm extends Component {
	state = {
		eventName: '',
		eventDate: '',
		eventLocation: '',
		loadingStatus: false
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	constructNewEvent = (evt) => {
		evt.preventDefault();
		if (this.state.eventName === '' || this.state.eventDate === '') {
			window.alert('Please enter a value in each field');
		} else if (this.state.eventLocation === '') {
			window.alert('Please enter a value in each field');
		} else {
			this.setState({ loadingStatus: true });
			const event = {
				name: this.state.eventName,
				date: this.state.eventDate,
				location: this.state.eventLocation,
				userId: EventManager.currentUserID
			};
			EventManager.post(event).then(() => this.props.history.push('/events'));
		}
    };
    
    keyDownEvent = () =>{

    }

	render() {
		return (
			<React.Fragment>
				<form>
				<fieldset>
					<div className="event-container">
						<div className="event-form">
							<label htmlFor="eventName">Name</label>
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="eventName"
								placeholder="Event Name"
							/>
							<label htmlFor="eventDate">Date</label>
							<input
								type="date"
								required
								onChange={this.handleFieldChange}
								id="eventDate"
								placeholder="eventDate"
							/>
							<label htmlFor="eventLocation">Location</label>
							<input
								type="text"
								required
                                onChange={this.handleFieldChange}
								id="eventLocation"
                                placeholder="Event Location"
							/>
						</div>
					</div>
					<div className="event-form-btn">
						<button
							className="event-btn"
							type="submit"
							disabled={this.state.loadingStatus}
							onClick={this.constructNewEvent}>
							Submit
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

export default NewEventForm;
