import React, { Component } from "react";
import ListPCinemas from "./showing-session/list-PCinemas";
import ListMoviedayOfWeek from "./showing-session/list-movie-dayOfWeek";
import ListMovieSession from "./showing-session/list-movie-session";
class ShowingSession extends Component {
  constructor(props){
    super(props);
    this.state = {
      idPCinema: "BHDStar",
      dayShowMovies: "1/1/2019"
    }
  }
  handlePCinemas = (idPCinema) => {
    this.setState({
      idPCinema,             //maHeThongRap,
    })
  }
  handleGetwDayShowMovies = (dayShowMovies) => {
    this.setState({
      dayShowMovies
    })
  }
  render() {
    let { inforMovie } = this.props;
    let { idPCinema, dayShowMovies } = this.state;
    return (
      <div
        className="tab-pane fade show active mt-5"
        id="showingSession"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row mx-0">
          <ListPCinemas handlePCinemas={this.handlePCinemas}/>
          <div className="listDayOfWeek col-sm-9 px-0 pt-3">
            <div className="DayOfWeek">
              <ListMoviedayOfWeek idPCinema={idPCinema} inforMovie={inforMovie} handleGetwDayShowMovies={this.handleGetwDayShowMovies}/>
            </div>
            <ListMovieSession dayShowMovies={dayShowMovies} inforMovie={inforMovie} idPCinema={idPCinema} handleGoToCheckout={this.props.handleGoToCheckout}/>

          </div>
        </div>
      </div>
    );
  }
}

export default ShowingSession;
