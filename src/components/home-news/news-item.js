import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
class NewsItem extends Component {
  renderNewsItem = () => {
    let { news } = this.props;
    if (news) {
      return (
        <Fragment>
          <Link
            to={news.goToDetailNews}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3"
          >
            <img
              src={news.newsImg}
              className="card-img-top"
              alt=""
            />
          </Link>
          <div className="card-body p-0">
            <Link to={news.goToDetailNews} target="_blank">
              <h5 className="card-title mb-2">
                {news.newsTitle}
              </h5>
            </Link>
            <p className="card-text">
              {news.newsDescription}
            </p>
            <div className="newsblock__icon d-flex w-100">
              <div className="wrapIcon d-flex mr-4 like">
                <img
                  src="https://123phim.vn/app/assets/img/icons/like.png"
                  alt=""
                />
                <p>0</p>
              </div>
              <div className="wrapIcon">
                <div className="d-flex">
                  <img
                    src="https://123phim.vn/app/assets/img/icons/comment.png"
                    alt=""
                    className="img-fluid"
                  />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
    return null;
  }
  render() {
    return (
      <div className="card border-0 w-100">
        {this.renderNewsItem()}
      </div>
    );
  }
}

export default NewsItem;