import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './home/Home';
import NewsForm from "./news/NewsForm";
import NewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm';
import EventList from './events/EventList';
import NewEventForm from './events/NewEventForm';
import EventEditForm from './events/EventEditForm';
import MessagesPage from './messages/MessagePage';


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

        {/* Route to tasks page that prints all tasks under a particular user to the DOM */}
				<Route
					exact path="/tasks"
					render={(props) => {
						return <TaskList {...props}/>;
					}}
				/>

        {/* Route to 'add new task'form */}
				<Route exact path="/tasks/new" render={(props) => {
						return <TaskForm {...props}/>
					}} 
				/>
				<Route
					exact
					path="/events"
					render={(props) => {
						return <EventList {...props} />;
					}}
				/>
				<Route
					path="/events/new"
					render={(props) => {
						return <NewEventForm {...props} />;
					}}
				/>
				<Route
					exact
					path="/events/:eventId(\d+)/edit"
					render={(props) => {
						return <EventEditForm {...props} />;
					}}
				/>
				<Route
					path="/messages"
					render={(props) => {
						return <MessagesPage {...props} />;
					}}
				/>
			</React.Fragment>
		);
  }
}

export default ApplicationViews;
