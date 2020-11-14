import React, { Component } from 'react';
import moment from 'moment-timezone';

class ModalShowTimeMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showtimeValue: {
        ngayChieuGioChieu: "",
        maRap: 0,
        giaVe: 0
      }
    }
  }
  // handleDate = (date) => {
  //   return <Moment format="MM/DD/YYYY hh:mm:ss" date={date} />
  // }
  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState({
      showtimeValue: { ...this.state.showtimeValue, [name]: value }
    })
  }
  handleOnSubmit = () => {
    const showtime = this.state.showtimeValue;
    showtime.maPhim = parseInt(this.props.movieModal.maPhim);
    showtime.maRap = parseInt(showtime.maRap);
    showtime.giaVe = parseInt(showtime.giaVe);
    showtime.ngayChieuGioChieu = moment(showtime.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm:ss");
    this.props.handleMovie(showtime, "addShowTime");
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.movieModal.maPhim !== this.props.movieModal.maPhim){
      this.setState({
        showtimeValue:{
          ngayChieuGioChieu: "",
          maRap: 0,
          giaVe: 0
        }
      })
    }
  }
  render() {
    let { movieModal } = this.props;
    let { ngayChieuGioChieu, maRap, giaVe } = this.state.showtimeValue;
    return (
      <div className="modal fade" tabIndex={-1} role="dialog" id="showtimeModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Showtime Movie of {movieModal.tenphim}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>ID Movie</label>
                <input
                  className="form-control"
                  value={movieModal.maPhim}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Day and Time</label>
                <input
                  className="form-control"
                  placeholder="Enter Day and Time"
                  name="ngayChieuGioChieu"
                  value={ngayChieuGioChieu}
                  type="date"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>ID Theater</label>
                <input
                  className="form-control"
                  placeholder="Enter id theater"
                  name="maRap"
                  value={maRap}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Cost</label>
                <input
                  className="form-control"
                  placeholder="Enter id movie"
                  name="giaVe"
                  value={giaVe}
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={this.handleOnSubmit}>
                Save
            </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalShowTimeMovie;