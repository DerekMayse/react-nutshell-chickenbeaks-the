import { Route } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./home/Home";
import UserForm from "./user-registration/UserForm";
import NewsForm from "./news/NewsForm";
import NewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import TasksPage from "./tasks/TaskPage";
import MessagesPage from "./messages/MessagePage";
import EventList from "./events/EventList";
import NewEventForm from "./events/NewEventForm";
import EventEditForm from "./events/EventEditForm";
import Login from "./auth/Login";
class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login />;
          }}
        />
        <Route
          exact
          path="/home"
          render={(props) => {
            return <HomePage />;
          }}
        />
        <Route
          exact
          path="/register-account"
          render={(props) => {
            return <UserForm {...props} />;
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
          exact
          path="/news/new"
          render={(props) => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          exact
          path="/news/:newsId(\d+)/edit"
          render={(props) => {
            return <NewsEditForm {...props} />;
          }}
        />
        <Route
          path="/tasks"
          render={(props) => {
            return <TasksPage />;
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
            return <MessagesPage />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
