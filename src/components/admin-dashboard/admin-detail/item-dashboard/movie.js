import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }
  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }
  render() {
    let { movie } = this.props;
    return (
      <tr className="position-relative" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <th scope="row">{movie.maPhim}</th>
        <td><img src={movie.hinhAnh} style={{ width: "50px", height: "60px" }} alt="" /></td>
        <td>{movie.tenPhim}</td>
        <td>{movie.ngayKhoiChieu}</td>
        <td>{movie.danhGia}</td>
        <td className="d-flex justify-content-center">
          <button className="btn btn-info mr-2" data-toggle="modal" data-target="#movieModal"
            onClick={() => this.props.handleTypeMovieModal(movie)}>
            Edit
              </button>
          <button
            className="btn btn-danger mr-2"
            onClick={() => this.props.handleMovie(movie, "deleteMovie")}
          >
            Delete
              </button>
              <button
            className="btn btn-warning" data-toggle="modal" data-target="#showtimeModal"
            onClick={() => this.props.handleTypeMovieModal(movie)}
          >
            Showtime
              </button>
        </td>
        <div className="movie-sub-menu p-3" style={{display: `${this.state.isHovered ? "block" : "none"}`}}>
          <p> <span>Mã phim:</span> {movie.maPhim} </p>
          <p> <span>Tên phim:</span> {movie.tenPhim}</p>
          <p> <span>Bí danh:</span> {movie.biDanh}</p>
          <p> <span>Mô tả:</span> {movie.moTa}</p>
          <p> <span>Trailer:</span> {movie.trailer}</p>
          <p> <span>Ngày khởi chiếu:</span> {movie.ngayKhoiChieu}</p>
          <p> <span>Đánh giá:</span> {movie.danhGia}</p>
        </div>
      </tr>
    );
  }
}

export default Movie;