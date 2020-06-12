import React, { Component } from "react";
import './NewsPage.css'
import { Card, Button } from 'react-bootstrap'


class NewsPage extends Component {
  
  render() {
   
    return (
        <>
        <Card style={{ width: '18rem' }} className="card">
          <Card.Body className="card-content">
            <Card.Text>
              <p className="time">  {this.props.news.date}</p>
              <h3>
                <span className="articleTitle">{this.props.news.title}</span>
              </h3>
              <p>{this.props.news.synopsis}</p>
              <p>{this.props.news.url}</p>
            </Card.Text>
            <Button variant="danger" type="button" onClick={() => this.props.deleteArticle(this.props.news.id)}>Delete</Button>
            <Button  variant="warning" type="button"
            onClick={() => {this.props.history.push(`/news/${this.props.news.id}/edit`)}}>Edit</Button>
          </Card.Body>
        </Card>
      </>
    );
    
  }
}

export default NewsPage;
