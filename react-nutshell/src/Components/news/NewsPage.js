import React, { Component } from "react";


class NewsPage extends Component {
  
  render() {
   
    return (
        <>
      <div className="card">
        <div className="card-content">
    <p>{this.props.news.date}</p>
          <h3>
            <span className="articleTitle">{this.props.news.title}</span>
          </h3>
          <p>{this.props.news.synopsis}</p>
          <p>{this.props.news.url}</p>
        </div>
      </div>
      <button type="button" onClick={() => this.props.deleteArticle(this.props.news.id)}>Delete</button>
      <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.news.id}/edit`)}}>Edit</button>
      </>
    );
    
  }
}

export default NewsPage;
