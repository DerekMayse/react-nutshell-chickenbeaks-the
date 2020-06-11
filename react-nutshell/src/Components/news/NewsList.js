import React, { Component } from "react";
import NewsPage from "./NewsPage";
import NewsManager from "../../modules/NewsManager";

import './NewsList.css'

class NewsList extends Component {
  state = {
    news: [],
  };







  deleteArticle = id => {
      
    NewsManager.delete(id)
    .then(() => {
      NewsManager.getAll()
      .then((newArticles) => {
        this.setState({
            news: newArticles
        })
      })
    })
  }

  componentDidMount() {
    NewsManager.getAll().then((news) => {
      console.log(news);
      this.setState({
        news: news,
      });
    });
  }

  render() {
    console.log(this.state.news);
    return (
      <>
      <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/news/new");
            }}
          >
            New Article
          </button>
        </section>
        <div className="container-cards">
          {this.state.news.sort((b,a) => {return new Date(a.date) - new Date(b.date)}).map((news) =>
            <NewsPage key={news.id} news={news} deleteArticle={this.deleteArticle}{...this.props} />
          )}
        </div>
  
      </>
    );
  }
}

export default NewsList;
