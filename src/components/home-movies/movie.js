import React, { Component } from 'react';
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
class Movie extends Component {
  rateMovie = (rating) => {
    if(rating){
      return (<StarRatings
        rating={rating}
        starRatedColor="#fb4226"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="10px"
        starSpacing="0"
        />)
    }

  }
  render() {
    let { movie } = this.props;
    return (
        <div className="col-6 col-md-6 col-lg-3 px-1">
        <div className="card w-100 border-0">
          <div className="card-header p-0">
            <div>
              <img
                src={movie.hinhAnh}
                className="card-img-top img-fluid"
                alt=""
              />
              <span>C18</span>
              <span>
                <p className="mb-0">8.9</p>
                <p className="mb-0">
                  {this.rateMovie(movie.danhGia)}
                </p>
              </span>
            </div>
            <div className="card-overplay" />
            <div className="card-play" data-toggle="modal" data-target="#movie-modal" onClick={() => this.props.handleSrcModalMovie(movie.trailer)}>
              <img
                src="https://123phim.vn/app/assets/img/icons/play-video.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="card-body p-0">
            <div className="card-text">
              <p className="mb-0 d-flex align-items-center">
                {movie.tenPhim}
              </p>
              <p className="mb-0 mt-2">{movie.ngayKhoiChieu}</p>
            </div>
            <div className="card-bookTicket w-100">
              <Link className="btn" to={`/detail-movie/${movie.maPhim}-${movie.tenPhim}`}>
                Mua vé
        </Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Movie;