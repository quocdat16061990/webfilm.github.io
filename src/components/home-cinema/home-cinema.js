import React, { Component } from "react";
import ListPCinemas from "./list-PCinemas";
import ListCinemas from "./list-cinemas";
import ListMoviesCinemas from "./list-movies-cinemas";
class HomeCinema extends Component {
  constructor(props){
    super(props);
    this.state = {
      idPCinema: "BHDStar",         ////maHeThongRap
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      idCinema: "bhd-star-cineplex-3-2"
    }
  }
  handlePCinemas = (idPCinema, logo) => {
    this.setState({
      idPCinema,
      logo
    })
  }
  handleCinemas = idCinema => {
    this.setState({
      idCinema
    })
  }
  render() {
    return (
      <section className="cinemablock" id="cinemablock">
        <div className="homeCinemaComplex myContainer">
          <img
            src="https://s3img.vcdn.vn/123phim/2019/09/m2t1-15680996103971.jpg"
            alt=""
            className="img-fluid mb-4"
          />
          <div className="row pb-5 px-3">
            <ListPCinemas handlePCinemas={this.handlePCinemas}/>
            <ListCinemas idPCinema={this.state.idPCinema} logo={this.state.logo} handleCinemas={this.handleCinemas} />
            {/* <ListMoviesCinemas idPCinema={this.state.idPCinema} idCinema={this.state.idCinema}/> */}
            <ListMoviesCinemas idPCinema={this.state.idPCinema} idCinema={this.state.idCinema} handleGoToCheckout={this.props.handleGoToCheckout}/>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCinema;
