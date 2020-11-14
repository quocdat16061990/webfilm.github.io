import React, { Component, Fragment } from 'react';
import Swal from 'sweetalert2';

class SeatopContent extends Component {
  constructor(props){
    super(props);
    this.timer = 0;
    this.state = {
      time: {
        m: 5,
        s: "00"
      },
      seconds: 300,
    }
  }
  componentDidMount(){
    this.startTimer();
  }
  componentWillMount(){
    clearInterval(this.timer);
  }
  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };
  countDown = () => {
    let secs = this.state.seconds - 1;
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    this.setState({
      time: {
        m: minutes,
        s: seconds
      },
      seconds: secs
    });
    if (secs === 0) {
      clearInterval(this.timer);
      Swal.fire('Hết thời gian giữ ghế')
      .then(result => {
        this.props.handleBookTicket()
      })

    }
  };
  renderLogoCinema = (tenCumRap) => {
    let srcLogo = "";
    switch (tenCumRap.slice(0, tenCumRap.indexOf("-") -1 )) {
      case "BHD Star Cineplex":
        srcLogo = "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png";
        break;
      case "CGV":
        srcLogo = "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png";
        break;
      case "CNS":
        srcLogo = "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png";
        break;
      case "GLX":
        srcLogo = "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png";
        break;
      case "Lotte":
        srcLogo = "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png";
        break;
      default:
        break;
    }
    return srcLogo;
  }
  renderSeatopContent = () => {
    let { listRoomTicket } = this.props;
    if(listRoomTicket.thongTinPhim){
      return (
        <div className="seat-topContent row">
          <div className="seat-leftTitle col-8 col-sm-9 d-flex align-items-center px-0">
            <img
              className="logocinema img-fluid"
              src={this.renderLogoCinema(listRoomTicket.thongTinPhim.tenCumRap)}
              alt=""
            />
            <div className="contentcinema">
              <p className="address mb-2">
                <span>{listRoomTicket.thongTinPhim.tenCumRap.slice(0, listRoomTicket.thongTinPhim.tenCumRap.indexOf("-"))}</span>
                <span>{listRoomTicket.thongTinPhim.tenCumRap.slice(listRoomTicket.thongTinPhim.tenCumRap.indexOf("-"), listRoomTicket.thongTinPhim.tenCumRap.length)}</span>
              </p>
              <p className="hour mb-2">{listRoomTicket.thongTinPhim.ngayChieu} - {listRoomTicket.thongTinPhim.gioChieu} - {listRoomTicket.thongTinPhim.tenRap}</p>
            </div>
          </div>
          <div className="seat-rightTitle col-4 col-sm-3 px-0">
            <p className="mb-0 mt-3">thời gian giữ ghế</p>
            <p>
              <span className="minute">0{this.state.time.m}</span>:
                  <span className="second">{this.state.time.s}</span>
            </p>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <Fragment>
        {this.renderSeatopContent()}
      </Fragment>
    )

  }
}
/*
const mapStateToDrops = state => {
  return {
    listPCinemas: state.movieReducer.listPCinemas   //load page listPCinemas is undifined
  };
};
*/
export default SeatopContent;