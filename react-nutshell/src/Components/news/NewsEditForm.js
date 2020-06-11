import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"


class NewsEditForm extends Component {
    
    state = {
      title: "",
      synopsis: "",
      url: "",
      
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {

      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedArticle = {
        id: this.props.match.params.newsId,
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url,
        date:this.state.date
      };

      NewsManager.update(editedArticle)
      .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
      console.log(this.props.match.params.newsId)
      NewsManager.get(this.props.match.params.newsId)
      .then(news => {
          this.setState({
            title: news.title,
            synopsis: news.synopsis,
            url:news.url,
            date: news.date,
            loadingStatus: false,
          });
      });
    }

    render() {
            return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                value={this.state.title}
                id="title"
                placeholder="Title"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                value={this.state.synopsis}
                id="synopsis"
                placeholder="Story Synopsis"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                value={this.state.url}
                id="url"
                placeholder="URL"
              />

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
              >
                Save
              </button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NewsEditForm