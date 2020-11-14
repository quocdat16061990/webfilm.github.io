import React, { Component } from "react";
import ListMovies from "./list-movies";
import ModalMovie from "./modal-movie";
import * as action from "./../../redux/action/index";
import { connect } from "react-redux";
class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcModalMovie: ""
    };
  }

  componentDidMount(){
    this.props.getListMovie();
  }

  handleSrcModalMovie = (srcModalMovie) => {
    this.setState({
      srcModalMovie
    })
  }

  renderShowListMovies = () => {
    let { listMovies } = this.props;
    let array = require('lodash');
    if (listMovies.length > 0) {
      listMovies = array.chunk(listMovies, 8);    //contain child array, length every child aray is 8
      return listMovies.map((listChildMovies, index) => {
        return (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} active key={index}>
            <div className="row mx-0">
              <ListMovies listChildMovies={listChildMovies} handleSrcModalMovie={this.handleSrcModalMovie}/>
            </div>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <section className="homeMovies myContainer" id="filmblock">
        <ul
          className="nav nav-tabs pt-5 pb-4 justify-content-center border-bottom-0"
          id="myTabHomeMovies"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="showingMovie-tab"
              data-toggle="tab"
              href="#showingMovie"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="coomingSoonMovie-tab"
              data-toggle="tab"
              href="#coomingSoonMovie"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContentHomeMovies">
          <div
            className="tab-pane fade show active"
            id="showingMovie"
            role="tabpanel"
            aria-labelledby="showingMovie-tab"
          >
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner">

                {this.renderShowListMovies()}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="coomingSoonMovie"
            role="tabpanel"
            aria-labelledby="coomingSoonMovie-tab"
          >
            Sắp Chiếu
          </div>
        </div>
        <ModalMovie srcModalMovie={this.state.srcModalMovie} handleSrcModalMovie={this.handleSrcModalMovie} />
      </section>
    );
  }
}
const mapStateToDrops = state => {
  return {
    listMovies: state.movieReducer.listMovies,
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovies());
    },
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops)(HomeMovies);
