import React, { Component } from "react";
import './NewsPage.css'


class NewsPage extends Component {
  
  render() {
   
    return (
        <>
      <div className="card">
        <div className="card-content">
    <p className="time">  {this.props.news.date}</p>
          <h3>
            <span className="articleTitle">{this.props.news.title}</span>
          </h3>
          <p>{this.props.news.synopsis}</p>
          <p>{this.props.news.url}</p>
     
      <button type="button" onClick={() => this.props.deleteArticle(this.props.news.id)}>Delete</button>
      <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.news.id}/edit`)}}>Edit</button>
           </div>
      </div>
      </>
    );
    
  }
}

export default NewsPage;
