import React, { Component } from "react";
import NewsPage from "./NewsPage";
import NewsManager from "../../modules/NewsManager";
import { Container, Button } from 'react-bootstrap'

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
      <Container className="section-content">
          <Button
            type="button"
            variant="primary"
            className="btn"
            onClick={() => {
              this.props.history.push("/news/new");
            }}
          >
            Add A New Article
          </Button>
        </Container>
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
