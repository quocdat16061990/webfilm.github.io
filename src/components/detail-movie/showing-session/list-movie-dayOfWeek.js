import React, { Component } from "react";

class ListMoviedayOfWeek extends Component {
  renderWrapDayOfWeek = () => {
    let listShowDayTimeMovies = [];    //day & times
    let listDayShowMovies = [];     // day
    let { inforMovie, idPCinema } = this.props;

    if (inforMovie.lichChieu) {
      for (let item of inforMovie.lichChieu) {
        if (item.thongTinRap.maHeThongRap === idPCinema) {
          listShowDayTimeMovies.push(item.ngayChieuGioChieu);
        }
      }
      if (listShowDayTimeMovies) {
        listDayShowMovies.push(
          new Date(listShowDayTimeMovies[0]).toLocaleDateString()
        );
        for (let item of listShowDayTimeMovies) {
          let index = 0;
          index = listDayShowMovies.findIndex(itemDayShowMovies => {
            return new Date(item).toLocaleDateString() === itemDayShowMovies;
          });
          if (index === -1) {
            listDayShowMovies.push(new Date(item).toLocaleDateString());
          }
        }
      }
    }
    if(listDayShowMovies[0] !== "Invalid Date"){
      return listDayShowMovies.map((item, index) => {
        let day = item.slice(0, item.indexOf("/", 2));
        let year = item.slice(item.indexOf("/", 2) + 1, item.length);
        // if(index === 0){
        //   this.props.handleGetwDayShowMovies(item);
        // }
        return (
          <li className="nav-item selectDate" key={index} onClick={() => this.props.handleGetwDayShowMovies(item)}>
          <a
            className={`nav-link ${index===0 ? "active": ""}`} data-toggle="tab"
            href="a"
          >
            <p>{day}</p>
            <p>{year}</p>
          </a>
        </li>
        )
      })
    }
  };
  render() {
    return (
      <ul
        className="nav wrapDayOfWeek"
      >
        {this.renderWrapDayOfWeek()}
      </ul>
    );
  }
}

export default ListMoviedayOfWeek;
