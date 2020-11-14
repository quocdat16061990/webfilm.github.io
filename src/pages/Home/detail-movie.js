import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as action from "./../../redux/action/index";
import ShowingSession from "./../../components/detail-movie/showing-session";
import Showinginfo from "./../../components/detail-movie/showing-info";
import Reviewer from "./../../components/detail-movie/reviewer";
import ReviewerModal from "./../../components/detail-movie/reviewer/reviewer-modal";
import LoadingSpinners from "./../../components/loading-spinners/loading-spinners";
import Swal from 'sweetalert2'

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberRate: 0,
      textReviewer: "",
      listReviewer: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    if(id !== -1){
      id = id.slice(0, id.indexOf("-"));
    }
    this.props.getInforMovie(id);
  }

  getNumberReviewerRateStar = numberRate => {
    this.setState({
      numberRate
    });
  };

  handleOnChange = event => {
    this.setState({
      textReviewer: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { listReviewer } = this.state;
    if (JSON.parse(localStorage.getItem("listReviewer"))) {
      listReviewer = JSON.parse(localStorage.getItem("listReviewer"));
    }
    listReviewer.push({
      userClient: JSON.parse(localStorage.getItem("userClient")),
      numberReviewer: this.state.numberRate,
      textReviewer: this.state.textReviewer

    });
    this.setState({
      listReviewer,
      textReviewer: ""
    });
    localStorage.setItem("listReviewer", JSON.stringify(listReviewer));
  };

  handleGoToCheckout = (link) => {
    if(localStorage.getItem("userClient")){
      this.props.history.push(link);
    }
    else{
      Swal.fire('Bạn chưa đăng nhập vui lòng đăng nhập')
    }
  }

  handleShowAvgRateStar = (number) => {
    let showRateStar = []
    for (let i = 0; i < number; i++) {
      showRateStar.push(<i class="fa fa-star mr-1"></i>)
    }
    return showRateStar;
  }
  handleShowNumberReviewer(){
    if(localStorage.getItem("listReviewer")){
      let listReviewer = JSON.parse(localStorage.getItem("listReviewer"));
      let avgNumberRateStar = 0
      for(let item of listReviewer){
        avgNumberRateStar += item.numberReviewer
      }
      avgNumberRateStar = Math.round( avgNumberRateStar/ listReviewer.length);
      return(
        <Fragment>
          <div className="mt-3 mb-2" style={{color: "#fb4226", fontSize: "20px"}}>{this.handleShowAvgRateStar(avgNumberRateStar)}</div>

          <div>{listReviewer.length} người đánh giá</div>
          </Fragment>

      )
    }
  }
  renderDetailMovie = () => {
    let { inforMovie } = this.props;
    if (inforMovie.hasOwnProperty("lichChieu")) {
      return (
        <Fragment>
          <div className="detailMainTop">
            <div className="styleBlur">
              <img src={inforMovie.hinhAnh} alt="" className="img-fluid" />
            </div>
            <div className="styleGradient" />
            <div className="detailMainInfo myContainer">
              <div className="row mx-0">
                <div
                  className="col-sm-3 col-xs-4 filmPosterTop posterMain px-0"
                  style={{
                    backgroundImage: `url(${inforMovie.hinhAnh})`
                  }}
                >
                  <div className="playTrailerPoster">
                    <img
                      src="https://123phim.vn/app/assets/img/icons/play-video.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-sm-5 infoMain">
                  <p className="mb-0">
                    {new Date(inforMovie.ngayKhoiChieu).toLocaleDateString()}
                  </p>
                  <div className="parentInfo2 py-2">
                    <span>C18</span>
                    <span>{inforMovie.tenPhim}</span>
                  </div>
                  <p>
                    {inforMovie.lichChieu
                      ? inforMovie.lichChieu[0].thoiLuong
                      : ""}
                    phút - Our booking cinema - IMDb {inforMovie.danhGia}
                  </p>
                  <a
                    className="buyTicket text-decoration-none"
                    href="#showingSession"
                  >
                    Mua vé
                  </a>
                </div>
                <div className="col-sm-2 circleStar px-0 text-center">
                  <div className="circlePercent">
                    <CircularProgressbar
                      value={89}
                      text={`${8.9}`}
                      background
                      styles={buildStyles({
                        textSize: "40px",
                        pathTransitionDuration: 2,
                        pathColor: `rgba(126, 211, 33, ${89 / 100})`,
                        textColor: "#fff",
                        trailColor: "#d6d6d6",
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                      })}
                    />;
                  </div>
                      {this.handleShowNumberReviewer()}
                    {/* <span>{localStorage.getItem("listReviewer") ? l}</span> */}
                </div>
              </div>
            </div>
            {/* MODAL */}
            {/* <div
              className="modal fade"
              tabIndex={-1}
              role="dialog"
              id="overlay-age-restrict"
              data-backdrop="static"
              data-keyboard="false"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <p className="modal-title mb-2">
                      <span className="mr-2">C18</span>
                      Phim dành cho khán giả từ 18 tuổi trở lên
                    </p>
                    <p className="info">
                      Hãy xác nhận bạn đang mua vé cho khán giả từ{" "}
                      <b>18 tuổi</b> trở lên. Theo quy định của Bộ Văn Hoá, Thể
                      Thao và Du Lịch, khán giả sẽ không được vào rạp và không
                      được hoàn trả tiền vé nếu không chứng thực được độ tuổi
                      của mình là từ <b>18 tuổi</b> trở lên.
                    </p>
                  </div>
                  <div className="modal-footer p-0">
                    <div className="col-sm-6 btn-close" data-dismiss="modal">
                      Hủy
                    </div>
                    <div className="col-sm-6 btn-go">Xác nhận</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* MODAL REVIEWER*/}
            <ReviewerModal numberRate={this.state.numberRate} textReviewer={this.state.textReviewer} getNumberReviewerRateStar={this.getNumberReviewerRateStar} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit}/>

          </div>
          <div className="contentMain myContainer">
            <ul
              className="nav nav-tabs pt-4 pt-md-5 pb-4 justify-content-center border-bottom-0 contentMain-title"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#showingSession"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#showingInfo"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Thông tin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#showingReviewer"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Đánh giá
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* LICH CHIEU */}
              <ShowingSession inforMovie={inforMovie} handleGoToCheckout={this.handleGoToCheckout}/>

              {/* THONG TIN */}
              <Showinginfo inforMovie={inforMovie} />
              {/* DANH GIA */}
              <Reviewer listReviewer={this.state.listReviewer} />
            </div>
          </div>
        </Fragment>
      );
    }
    else{
      return <LoadingSpinners />;
    }
  };
  render() {
    return (
      <Fragment>
        <section className="myInforDetailMain col-sm-12 block light px-0">
          {this.renderDetailMovie()}
        </section>
      </Fragment>
    );
  }
}
const mapStateToDrops = state => {
  return {
    inforMovie: state.movieReducer.inforMovie
  };
};
const mapDispatchToDrops = dispatch => {
  return {
    getInforMovie: id => {
      dispatch(action.actGetInforMovie(id));
    }
  };
};
export default connect(mapStateToDrops, mapDispatchToDrops)(DetailMovie);
