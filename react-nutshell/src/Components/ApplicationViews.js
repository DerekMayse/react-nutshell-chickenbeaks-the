import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './home/Home';
import NewsPage from './news/NewsPage';
import TasksPage from './tasks/TaskPage';
import MessagesPage from './messages/MessagePage';
import EventsPage from './events/EventPage';

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route
					path="/home"
					render={(props) => {
						return <HomePage />;
					}}
				/>
				<Route
					path="/news"
					render={(props) => {
						return <NewsPage />;
					}}
				/>
				<Route
					path="/tasks"
					render={(props) => {
						return <TasksPage />;
					}}
				/>
				<Route
					path="/events"
					render={(props) => {
						return <EventsPage />;
					}}
				/>
				<Route
					path="/messages"
					render={(props) => {
						return <MessagesPage />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
