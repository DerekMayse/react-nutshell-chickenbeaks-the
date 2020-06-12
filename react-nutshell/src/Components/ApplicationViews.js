import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './auth/Login'
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
  //Added conditional authentication in navbar pages so user will not be able to access any pages without logging in
  isAuthenticated = () => localStorage.getItem("credentials") !== null

	render() {
		return (
			<React.Fragment>
        <Route exact path="/" component={Login}/>

				<Route
					exact path="/home"
					render={(props) => {
						if (this.isAuthenticated()) {
              return <HomePage {...props} />
          } else {
              return <Redirect to="/" />
          }
					}}
				/>
        <Route
          exact
          path="/news"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <NewsList {...props} />
          } else {
              return <Redirect to="/" />
          }
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
						if (this.isAuthenticated()) {
              return <TaskList {...props} />
          } else {
              return <Redirect to="/" />
          }
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
						if (this.isAuthenticated()) {
              return <EventList {...props} />
          } else {
              return <Redirect to="/" />
          }
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
					exact path="/messages"
					render={(props) => {
						if (this.isAuthenticated()) {
              return <MessagesPage {...props} />
          } else {
              return <Redirect to="/" />
          }
					}}
				/>
			</React.Fragment>
		);
  }
}

export default ApplicationViews;
