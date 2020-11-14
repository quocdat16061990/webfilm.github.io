import React, { Component } from "react";
class ListMovieSession extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWrapMovie: true
    }
  }
  handleShowWrapMovie = () => {
    this.setState({
      showWrapMovie: !this.state.showWrapMovie
    })
  }
  renderListMovieSession = () => {
    let { inforMovie, idPCinema, dayShowMovies } = this.props;
    let listShowDayTimeMovies = [];
    let listShowTimeMovies = [];
    let tenCumRap = "";
    if (inforMovie.lichChieu) {
      for (let item of inforMovie.lichChieu) {
        if (item.thongTinRap.maHeThongRap === idPCinema) {
          listShowDayTimeMovies.push(item.ngayChieuGioChieu);
          tenCumRap = item.thongTinRap.tenCumRap;
        }
      }
      if (listShowDayTimeMovies) {
        for (let itemShowDayTimeMovies of listShowDayTimeMovies) {
          if (
            new Date(itemShowDayTimeMovies).toLocaleDateString() ===
            dayShowMovies
          ) {
            listShowTimeMovies.push(
              new Date(itemShowDayTimeMovies).toLocaleTimeString()
            );
          }
        }
        if (listShowTimeMovies.length > 0) {
          return (
            <li className="nav-item">
              <div className="nav-link active wrapMovie" href="#">
                <div className="movieInfo d-flex" onClick={() => this.handleShowWrapMovie()}>
                  <img src={inforMovie.hinhAnh} alt="" className="img-fluid" />
                  <div className="wrapInfo">
                    <div className="headInfo mb-0">
                      <span>{idPCinema}</span>
                    </div>
                    <div className="movieAddInfo mb-0">
                      <span>{tenCumRap}</span>
                      <span>[Bản đồ]</span>
                    </div>
                  </div>
                </div>
                <div className="listTypeTime d-flex align-items-center" style={{opacity: `${this.state.showWrapMovie ? "1" : "0"}`}}>
                  <img
                    src="https://123phim.vn/app/assets/img/icons/typeSession/2_0.png"
                    alt=""
                    className="img-fluid"
                  />
                  {this.renderlistShowTimeMovies(listShowTimeMovies)}
                </div>
              </div>
            </li>
          );
        }
        else{
          return (
            <div className="mt-5 text-center" style={{color: "#9b9b9b", fontSize: "24px"}}>Không có suất chiếu</div>
          )
        }
      }
    }
  };
  handleLinkToCheckout = (dayShowMovie, timeShowMovie) => {
    let { inforMovie, idPCinema } = this.props;
    if (inforMovie.lichChieu) {
      let index = inforMovie.lichChieu.findIndex(item => {
        return ((dayShowMovie === new Date(item.ngayChieuGioChieu).toLocaleDateString()) && (timeShowMovie === new Date(item.ngayChieuGioChieu).toLocaleTimeString()) && (item.thongTinRap.maHeThongRap === idPCinema) )
      })
      this.props.handleGoToCheckout(`/checkout-movie/${inforMovie.lichChieu[index].maLichChieu}`)
    }

  }
  renderlistShowTimeMovies = listShowTimeMovies => {
    return listShowTimeMovies.map((item, index) => {
      return (
        <div className="sessions" key={index}>
          <div className="sessions__time" onClick={() => this.handleLinkToCheckout(this.props.dayShowMovies, item)}>
            {item.slice(0, item.indexOf(":") + 3) +
              item.slice(item.indexOf(":") + 6, item.length)}
          </div>
        </div>
      );
    });
  };
  render() {
    return <ul className="nav flex-column listSession">
      {this.renderListMovieSession()}
    </ul>;
  }
}

export default ListMovieSession;
