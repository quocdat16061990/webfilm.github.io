import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
class ListMoviesCinemas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPCinema: this.props.idPCinema,
      showtimeMovies: [],
      toggle: [true, true, true, true, true, true, true],
      containListShowMovies: []
    }
  }

  componentDidMount() {
    this.props.getListMoviesCinemas(this.state.idPCinema);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.idPCinema !== this.state.idPCinema) {
      this.setState({
        idPCinema: nextProps.idPCinema,
        containListShowMovies: []
      }, () => this.props.getListMoviesCinemas(this.state.idPCinema))
    }
    else if(nextProps.idCinema !== this.props.idCinema){
      this.setState({
        containListShowMovies: [],
        toggle: [true, true, true, true, true, true, true],
      })
    }
    else if(nextProps.listShowMovies !== this.props.listShowMovies){
      let { containListShowMovies } = this.state;
      containListShowMovies.push(nextProps.listShowMovies)
      this.setState({
        containListShowMovies
      })
    }
  }

  handleLinkToCheckout = (timeShowMovie, listShowtimeMovies) => { //showtimeMovies is lstLichChieuTheoPhim from LayThongTinLichChieuHeThongRap
    let index = listShowtimeMovies.findIndex(itemShowtimeMovies => {
      return timeShowMovie === new Date(itemShowtimeMovies.ngayChieuGioChieu).toLocaleTimeString();
    })
    if (index !== -1) {
      this.props.handleGoToCheckout(`/checkout-movie/${listShowtimeMovies[index].maLichChieu}`)
    }
  }

  handleShowTimes = (listShowtimeMovies) => { //showtimeMovies is lstLichChieuTheoPhim from LayThongTinLichChieuHeThongRap
    let showtimeMovies = [];  //contain time
    showtimeMovies.push(new Date(listShowtimeMovies[0].ngayChieuGioChieu).toLocaleTimeString())
    for (let itemListShowtimeMovies of listShowtimeMovies) {
      let index = 0;
      index = showtimeMovies.findIndex(itemShowtimeMovies => {
        return itemShowtimeMovies === new Date(itemListShowtimeMovies.ngayChieuGioChieu).toLocaleTimeString();
      })
      if (index === -1) {
        showtimeMovies.push(new Date(itemListShowtimeMovies.ngayChieuGioChieu).toLocaleTimeString())
      }
    }
    return showtimeMovies.map((item, index) => {
      return (
        <div key={index} className="text-center sessions__time" onClick={() => { this.handleLinkToCheckout(item, listShowtimeMovies) }}>{item.slice(0, item.indexOf(":") + 3) + item.slice(item.indexOf(":") + 6, item.length)}</div>
      )
    })
  }

  handleToggle = (index) => {
    let { toggle } = this.state;
    toggle[index] = !toggle[index];
    this.setState({
      toggle
    },()=> console.log(this.state.toggle)
    )
  }


  renderListMoviesCinemas = () => {
    let { listMoviesCinemas, idCinema, listShowMovies} = this.props;
    let { containListShowMovies } = this.state;
    if (listMoviesCinemas) {
      return listMoviesCinemas.map((item, index) => {
        let indexMaCumRap = []; // array index lstCumRap
        item.lstCumRap.map((itemlstCumRap, index) => {
          if (itemlstCumRap.maCumRap === idCinema) {
            indexMaCumRap.push(index)
          }
          return null;
        })
        if (indexMaCumRap.length) {
          return indexMaCumRap.map((position, indexItemMaCumRap) => {
            return item.lstCumRap[position].danhSachPhim.map((movie, indexDanhSachPhim) => { // movie is danhSachPhim[] from LayThongTinLichChieuHeThongRap
              if((listShowMovies.length === 0) || (containListShowMovies.length === 0)){
                this.props.getListShowMovies(movie.maPhim)
              }
              let indexContainListShowMovies = -1;
              if(containListShowMovies.length){
                indexContainListShowMovies = containListShowMovies.findIndex(item => {
                  return item.maPhim === movie.maPhim
                })
              }

              return (
                <li className="nav-item" key={index}>
                  <div
                    className="nav-link active wrapMovie "
                    href="#"
                    data-toggle="tab"
                  >
                    <div className="movieInfo d-flex" onClick={() => this.handleToggle(indexDanhSachPhim)}>
                      <img
                        src={(indexContainListShowMovies!==-1) ? containListShowMovies[indexContainListShowMovies].hinhAnh : ""}
                        alt=""
                        className="img-fluid mr-3"
                      />
                      <div className="wrapInfo">
                        <p>
                          <span>C13</span>
                          <span>{movie.tenPhim}</span>
                        </p>
                        <p>{(indexContainListShowMovies!==-1) ? containListShowMovies[indexContainListShowMovies].heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong : ""} phút - Our booking cinema - IMDb {listShowMovies.danhGia}</p>
                      </div>
                    </div>
                    <div className="listTypeTime pt-3 pl-3" style={{ display: `${this.state.toggle[indexDanhSachPhim] ? "flex" : "none"}` }}>
                      <img
                        src="https://123phim.vn/app/assets/img/icons/typeSession/2_0.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="sessions d-flex">
                        {this.handleShowTimes(movie.lstLichChieuTheoPhim)}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          })
        }
        return (
          <div className="mt-5 text-center" style={{ color: "#9b9b9b", fontSize: "24px" }}>Không có suất chiếu</div>
        );
      })
    }
  }
  render() {
    return (
      <div className="col-md-6 col-lg-7" style={{ height: 705, overflowX: "hidden", overflowY: "auto" }}>
        <ul className="nav flex-column listMovies">
        {this.renderListMoviesCinemas()}
      </ul>
      </div>

    );
  }
}
const mapStateToDrops = state => {
  return {
    listMoviesCinemas: state.movieReducer.listMoviesCinemas,
    listShowMovies: state.movieReducer.listShowMovies
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListMoviesCinemas: idPCinema => {
      dispatch(action.actGetListMoviesCinemas(idPCinema))
    },
    getListShowMovies: idShowMovies => {
      dispatch(action.actGetListShowMovies(idShowMovies))
    }
  }
}

export default connect(mapStateToDrops, mapDispatchToDrops)(ListMoviesCinemas);