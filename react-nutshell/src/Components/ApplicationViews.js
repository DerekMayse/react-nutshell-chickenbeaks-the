import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './home/Home';
import NewsForm from "./news/NewsForm";
import NewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm';
import MessagesPage from './messages/MessagePage';
import EventsPage from './events/EventPage';

class ApplicationViews extends Component {
	// isAuthenticated = () => localStorage.getItem("credentials") !== null

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
          exact
          path="/news"
          render={(props) => {
            return <NewsList {...props} />;
          }}
        />
        <Route
          path="/news/new"
          render={(props) => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={(props) => {
            return <NewsEditForm {...props} />;
          }}
        />
				<Route
					exact path="/tasks"
					render={(props) => {
						return <TaskList {...props}/>;
					}}
				/>
				<Route exact path="/tasks/new" render={(props) => {
						return <TaskForm {...props}/>
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
