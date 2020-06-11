import { Route } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./home/Home";
import NewsForm from "./news/NewsForm";
import NewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import TasksPage from "./tasks/TaskPage";
import MessagesPage from "./messages/MessagePage";
import EventsPage from "./events/EventPage";

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
            return <MessagesPage {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
