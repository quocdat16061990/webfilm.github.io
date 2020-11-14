import React, { Component } from 'react';
// import * as yup from 'yup';
import moment from 'moment-timezone';
class ModalMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieValue: {
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        ngayKhoiChieu: "",
        danhGia: ""
      },
      movieError: {
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        ngayKhoiChieu: "",
      },
      isValid: {
        isMaPhimValid: false,
        isTenPhimValid: false,
        isBiDanhValid: false,
        isTrailerValid: false,
        isHinhAnhValid: false,
        isMoTaValid: false,
        isNgayKhoiChieuValid: false,
        isPhimValid: false
      }
    }
  }
  handleOnChange = event => {
    let { name, value } = event.target;
    if (name === "ngayKhoiChieu") {
      this.checkValidation(event)
    }
    this.setState({
      movieValue: { ...this.state.movieValue, [name]: value }
    })
  }
  checkValidation = event => {
    let { name, value } = event.target;
    let yup = require('yup');
    let validationType = null;
    switch (name) {
      case "maPhim":
        validationType = yup.number().required().test('len', ' maPhim must be greater 4 characters', val => val.toString().length >= 4);
        break;
      case "tenPhim":
        validationType = yup.string().required();
        break;
      case "biDanh":
        validationType = yup.string().required();
        break;
      case "trailer":
        validationType = yup.string().required();
        break;
      case "hinhAnh":
        validationType = yup.string().required();
        break;
      case "moTa":
        validationType = yup.string().required().test('len', ' moTa must be greater 5 characters', val => val.toString().length >= 5);
        break;
      case "ngayKhoiChieu":
        validationType = yup.string().required();
        break;

      default:
        break;
    }
    let schema = yup.object().shape({
      [name]: validationType
    });

    let test = schema.validate({ [name]: value })
      .then(result => {
        this.handleYup(name, result)
      })
      .catch(err => {
        this.handleYup(name, err)
      });
  }
  handleYup = (name, isResult) => {
    let { isMaPhimValid, isTenPhimValid, isBiDanhValid, isTrailerValid, isHinhAnhValid, isMoTaValid, isNgayKhoiChieuValid, isPhimValid } = this.state.isValid;
    if(this.props.userModal !== ""){        // xử lý trường hợp cập nhật người dùng
      isMaPhimValid = true;
      isTenPhimValid = true;
      isBiDanhValid = true;
      isTrailerValid = true;
      isHinhAnhValid = true;
      isMoTaValid = true;
      isNgayKhoiChieuValid = true;
    }
    let message = "";
    switch (name) {
      case "maPhim":
        if (isResult.maPhim) {
          isMaPhimValid = true
        }
        else {
          isMaPhimValid = false;
          message = isResult.message
        }
        break;
      case "tenPhim":
        if (isResult.tenPhim) {
          isTenPhimValid = true
        }
        else {
          isTenPhimValid = false;
          message = isResult.message
        }
        break;
      case "biDanh":
        if (isResult.biDanh) {
          isBiDanhValid = true
        }
        else {
          isBiDanhValid = false;
          message = isResult.message
        }
        break;
      case "trailer":
        if (isResult.trailer) {
          isTrailerValid = true
        }
        else {
          isTrailerValid = false;
          message = isResult.message
        }
        break;
      case "hinhAnh":
        if (isResult.hinhAnh) {
          isHinhAnhValid = true
        }
        else {
          isHinhAnhValid = false;
          message = isResult.message
        }
        break;
      case "moTa":
        if (isResult.moTa) {
          isMoTaValid = true
        }
        else {
          isMoTaValid = false;
          message = isResult.message
        }
        break;
      case "ngayKhoiChieu":
        if (isResult.ngayKhoiChieu) {
          isNgayKhoiChieuValid = true
        }
        else {
          isNgayKhoiChieuValid = false;
          message = isResult.message
        }
        break;
      default:
        break;
    }
    isPhimValid = isMaPhimValid && isTenPhimValid && isBiDanhValid && isTrailerValid && isHinhAnhValid && isMoTaValid && isNgayKhoiChieuValid
    this.setState({
      movieError: {
        ...this.state.movieError, [name]: message
      },
      isValid: {
        isMaPhimValid,
        isTenPhimValid,
        isBiDanhValid,
        isTrailerValid,
        isHinhAnhValid,
        isMoTaValid,
        isNgayKhoiChieuValid,
        isPhimValid
      }
    })
  }
  handleOnSubmit = () => {
    const movie = { ...this.state.movieValue };
    movie.ngayKhoiChieu =  moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")
    movie.maNhom = "GP03";
    if(this.state.isValid.isPhimValid){
      if (this.props.movieModal === "") {
        this.props.handleMovie(movie, "addMovie");
      }
      else {
        this.props.handleMovie(movie, "editMovie");
      }
    }

  }
  handleShowErrorMessage = (message) => {
    if (message !== "") {
      return (
        <span
          class="text-left d-block"
          style={{ color: "red" }}
        >
          {message}
        </span>
      )
    }
  }
  componentWillReceiveProps(nextProps) {
    let { movieModal } = nextProps;
    let { maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu, danhGia } = this.state.movieValue;
    if (nextProps && movieModal) {
      this.setState({
        movieValue: {
          maPhim: movieModal.maPhim,
          tenPhim: movieModal.tenPhim,
          biDanh: movieModal.biDanh,
          trailer: movieModal.trailer,
          hinhAnh: movieModal.hinhAnh,
          moTa: movieModal.moTa,
          ngayKhoiChieu: movieModal.ngayKhoiChieu,
          danhGia: movieModal.danhGia
        }
      })
    }
    else if (maPhim || tenPhim || biDanh || trailer || hinhAnh || moTa || ngayKhoiChieu || danhGia) {
      this.setState({
        movieValue: {
          maPhim: "",
          tenPhim: "",
          biDanh: "",
          trailer: "",
          hinhAnh: "",
          moTa: "",
          ngayKhoiChieu: "",
          danhGia: ""
        }
      })
    }

  }
  render() {
    let { maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu, danhGia } = this.state.movieValue;
    return (
      <div className="modal fade" id="movieModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{this.props.movieModal === "" ? "Add" : "Edit"} Movie</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
        </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className={`form-group ${this.state.movieError.maPhim !== "" ? "mb-0" : ""}`}>
                <label>ID Movie</label>
                <input
                  className="form-control"
                  placeholder="Enter id movie"
                  name="maPhim"
                  value={maPhim}
                  onChange={this.handleOnChange}
                  disabled={this.props.movieModal}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.maPhim)}
              <div className={`form-group ${this.state.movieError.tenPhim !== "" ? "mb-0" : ""}`}>
                <label>Name Movie</label>
                <input
                  className="form-control"
                  placeholder="Enter name movie"
                  name="tenPhim"
                  value={tenPhim}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  onChange={this.handleOnChange}

                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.tenPhim)}
              <div className={`form-group ${this.state.movieError.biDanh !== "" ? "mb-0" : ""}`}>
                <label>Alias</label>
                <input
                  className="form-control"
                  placeholder="Enter Alias"
                  name="biDanh"
                  value={biDanh}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  onChange={this.handleOnChange}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.biDanh)}
              <div className={`form-group ${this.state.movieError.trailer !== "" ? "mb-0" : ""}`}>
                <label>Trailer</label>
                <input
                  className="form-control"
                  placeholder="Enter link trailer"
                  name="trailer"
                  value={trailer}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  onChange={this.handleOnChange}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.trailer)}
              <div className={`form-group ${this.state.movieError.hinhAnh !== "" ? "mb-0" : ""}`}>
                <label>Image</label>
                <input
                  className="form-control"
                  placeholder="Enter link Image"
                  name="hinhAnh"
                  value={hinhAnh}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  onChange={this.handleOnChange}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.hinhAnh)}
              <div className={`form-group ${this.state.movieError.moTa !== "" ? "mb-0" : ""}`}>
                <label>Description</label>
                <input
                  className="form-control"
                  placeholder="Enter description"
                  name="moTa"
                  value={moTa}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  onChange={this.handleOnChange}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.moTa)}
              <div className={`form-group ${this.state.movieError.ngayKhoiChieu !== "" ? "mb-0" : ""}`}>
                <label>Premiere Date</label>
                <input
                  className="form-control"
                  placeholder="Enter link premiere date"
                  name="ngayKhoiChieu"
                  value={ngayKhoiChieu}
                  type="date"
                  onChange={this.handleOnChange}
                />
              </div>
              {this.handleShowErrorMessage(this.state.movieError.ngayKhoiChieu)}
              <div className="form-group">
                <label>Rate Movie</label>
                <select className="form-control"
                  name="danhGia"
                  value={danhGia}
                  onChange={this.handleOnChange}
                >
                  <option value="0"></option>
                  <option value="1">&#x022C6;</option>
                  <option value="2">&#x022C6; &#x022C6;</option>
                  <option value="3">&#x022C6; &#x022C6; &#x022C6;</option>
                  <option value="4">&#x022C6; &#x022C6; &#x022C6; &#x022C6;</option>
                  <option value="5">&#x022C6; &#x022C6; &#x022C6; &#x022C6; &#x022C6;</option>
                </select>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button className="btn btn-success" onClick={this.handleOnSubmit} disabled={!this.state.isValid.isPhimValid}>{this.props.movieModal === "" ? "Add" : "Edit"}</button>
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

export default ModalMovie;