import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NewsThumbnailItem extends Component {
  renderNewsThumbnailItem = () => {
    let { newsThumbnail } = this.props;
    if(newsThumbnail){
      return (
        <Link
          to={newsThumbnail.goToDetailNews}
          target="_blank"
          className="d-flex text-decoration-none"
        >
          <img
            src={newsThumbnail.newsImg}
            alt=""
            className="img-fluid"
          />
          <p>
            {newsThumbnail.newsTitle}
                </p>
        </Link>
      );
    }
  }
  render() {
    return (
      <div className="col-sm-12 newsThumbnail px-0">
        {this.renderNewsThumbnailItem()}
      </div>
    );
  }
}

export default NewsThumbnailItem;