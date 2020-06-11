import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager";

class NewsForm extends Component {
  state = {
    title: "",
    synopsis: "",
    url: "",
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewArticle = (evt) => {
    evt.preventDefault();
    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const article = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url,
        date:`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
        userId: 2
      };
     console.log(article)
      NewsManager.post(article).then(() => this.props.history.push("/news"));
    }
  };

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
                id="title"
                placeholder="Title"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="synopsis"
                placeholder="Story Synopsis"
              />

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                placeholder="URL"
              />

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewArticle}
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

export default NewsForm;
