import React, { Component, Fragment } from 'react';
import Carousel from "./../../components/carousel/carousel";
import HomeMovies from "./../../components/home-movies/home-movies";
import HomeCinema from "./../../components/home-cinema/home-cinema";
import HomeNews from "./../../components/home-news/home-news";
import HomeApp from "./../../components/home-app/home-app";
import Swal from 'sweetalert2'

class Home extends Component {
  handleGoToCheckout = (link) => {
    if(localStorage.getItem("userClient")){
      this.props.history.push(link);
    }
    else{
      Swal.fire('Bạn chưa đăng nhập vui lòng đăng nhập')
    }
  }
  render() {
    return (
      <Fragment>
        <Carousel />
        <HomeMovies />
        <HomeCinema handleGoToCheckout={this.handleGoToCheckout} />
        <HomeNews />
        <HomeApp />
      </Fragment>
    );
  }
}

export default Home;