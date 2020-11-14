import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import NewsItem from "./news-item";
import NewsThumbnailItem from "./news-thumbnail-item";
import SupportFixed from "./supportFixed";
class HomeNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      rederNews: [],
    };
  }

  componentDidMount() {
    this.props.getListHomeNews();
  }
  handleSeeMoreNews = () => {
    let { listNews, listNewsThumbnail} = this.props;
    let index = this.state.index + 4;
    let { rederNews } = this.state;
    if((index < listNews.length) && (index < listNewsThumbnail.length)){
      rederNews.push(this.renderItemHomeNewsContent(index));
    }
    this.setState({
      index,
      rederNews
    });
  };
  renderHomeNewsContent = () => {
    let { listNews, listNewsThumbnail} = this.props;
    let { rederNews } = this.state;
    if((listNews.length > 0) && (listNewsThumbnail.length > 0) && (rederNews.length === 0)){
      rederNews.push(this.renderItemHomeNewsContent(0));
    }
    return  [...this.state.rederNews];
  };
  renderItemHomeNewsContent = (index) =>{
    let { listNews, listNewsThumbnail } = this.props;
    return(
      <div className="row">
        <div className="col-sm-6 mb-4"><NewsItem news={listNews[index]}/></div>
        <div className="col-sm-6 mb-4"><NewsItem news={listNews[index + 1]}/></div>
        <div className="col-sm-4 mb-4"><NewsItem news={listNews[index + 2]}/></div>
        <div className="col-sm-4 mb-4"><NewsItem news={listNews[index + 3]}/></div>
        <div className="col-sm-4 mb-4">
          <NewsThumbnailItem newsThumbnail={listNewsThumbnail[index]} />
          <NewsThumbnailItem newsThumbnail={listNewsThumbnail[index + 1]} />
          <NewsThumbnailItem newsThumbnail={listNewsThumbnail[index + 2]} />
          <NewsThumbnailItem newsThumbnail={listNewsThumbnail[index + 3]} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <section className="newsblock position-relative" id="newsblock">
        <div className="homeNews myContainer">
          <img
            src="https://s3img.vcdn.vn/123phim/2019/09/m2t1-15680996103971.jpg"
            alt=""
            className="img-fluid"
          />
          <ul
            className="nav nav-tabs pt-5 pb-4 justify-content-center border-bottom-0"
            id="myTabHomeNews"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#showingNews"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#showingReview"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#showingPromotion"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContentHomeNews">
            <div
              className="tab-pane fade show active"
              id="showingNews"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {this.renderHomeNewsContent()}
            </div>
            <div
              className="tab-pane fade"
              id="showingReview"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              showingReview
            </div>
            <div
              className="tab-pane fade"
              id="showingPromotion"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              showingPromotion
            </div>
            <div className="wrapButtonSeeMoreNews pb-5">
              <button
                className="btn  d-block mx-auto shadow-none"
                onClick={() => this.handleSeeMoreNews()}
              >
                XEM THÊM
              </button>
            </div>
          </div>
        </div>
        <SupportFixed />
      </section>
    );
  }
}

const mapStateToDrops = state => {
  return {
    listNews: state.movieReducer.listNews,
    listNewsThumbnail: state.movieReducer.listNewsThumbnail
  };
};
const mapDispatchToDrops = dispatch => {
  return {
    getListHomeNews: () => {
      dispatch(action.actGetNews());
      dispatch(action.actGetNewsThumbnail());
    }
  };
};

export default connect(mapStateToDrops, mapDispatchToDrops)(HomeNews);
