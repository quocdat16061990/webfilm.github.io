import React, { Component } from "react";
import HomeTools from "./homeTools";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcModal: "https://www.youtube.com/embed/oTQbIYAu9-Y"
    };
  }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount");

  // }
  handleSrcModal = (id = parseInt(document.querySelector(".carouselModal.active").getAttribute("data-slide-to"))) => {
    let srcModal;
    switch (id) {
      case 0:
        srcModal = "https://www.youtube.com/embed/oTQbIYAu9-Y";
        break;
      case 1:
        srcModal = "https://www.youtube.com/embed/41JsZrvSOdA";
        break;
      case 2:
        srcModal = "https://www.youtube.com/embed/9OllovocYPI";
        break;
      case 3:
        srcModal = "https://www.youtube.com/embed/sT2jdjqkggI";
        break;
      case 4:
        srcModal = "https://www.youtube.com/embed/0IoB66oDtHw";
        break;
      default:
        srcModal=""
        break;
    }
    this.setState({
      srcModal
    })

  }
  render() {
    return (
      <section className="myCarousel">
        <div
          id="myCarouselIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarouselIndicators"
              data-slide-to={0}
              data-id={1}
              className="active carouselModal"
            />
            <li data-target="#myCarouselIndicators" data-slide-to={1} data-id={1} className="carouselModal"/>
            <li data-target="#myCarouselIndicators" data-slide-to={2} data-id={1} className="carouselModal"/>
            <li data-target="#myCarouselIndicators" data-slide-to={3} data-id={1} className="carouselModal"/>
            <li data-target="#myCarouselIndicators" data-slide-to={4} data-id={1} className="carouselModal"/>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img
                src="https://s3img.vcdn.vn/123phim/2019/10/ma-le-15719705871753.jpg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/10/dem-hgian-15722572453627.jpg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/10/di-15719707157277.jpg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/10/dieu-uoc-15719706822829.jpg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/11/kim-ji-young-15731882202427.jpg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
          </div>
          < a
            className="carousel-control-prev"
            href="#myCarouselIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ml-3"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </ a>
          <a
            className="carousel-control-next"
            href="#myCarouselIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon mr-3"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
          <button className="trailer-movie" data-toggle="modal" data-target="#carouselModal" onClick={() => this.handleSrcModal()}>
            <img
              src="https://123phim.vn/app/assets/img/icons/play-video.png"
              alt=""
              className="img-fluid"
            />
          </button>
        </div>

        {/* MODAL */}
        <div
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          id="carouselModal"
        >
          <div className="modal-dialog modal-lg m-0" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" onClick={() => this.handleSrcModal(-1)}>
                <img
                  src="https://123phim.vn/app/assets/img/icons/close.png"
                  alt=""
                />
              </button>
              <iframe
                title={"iframe-carousel-1"}
                width="100%"
                height="100%"
                src={this.state.srcModal}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <HomeTools />
      </section>
    );
  }
}

export default Carousel;
