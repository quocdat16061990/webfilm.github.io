import React, { Component } from 'react';

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: ""
      },
      error: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: ""
      },
      isValid: {
        isTaiKhoanValid: false,
        isHoTenValid: false,
        isMatKhauValid: false,
        isEmailValid: false,
        isSoDTValid: false,
        isMaLoaiNguoiDungValid: false,
        isNguoiDungValid: false
      }
    }
  }
  handleOnChange = event => {
    let { name, value } = event.target;
    if (name === "maLoaiNguoiDung") {
      this.checkValidation(event)
    }
    this.setState({
      value: { ...this.state.value, [name]: value }
    })
  }

  checkValidation = event => {
    let { name, value } = event.target;
    let message = "";
    let { isTaiKhoanValid, isHoTenValid, isMatKhauValid, isEmailValid, isSoDTValid, isMaLoaiNguoiDungValid, isNguoiDungValid } = this.state.isValid;
    let { listUsers } = this.props;
    if(this.props.userModal !== ""){        // xử lý trường hợp cập nhật người dùng
        isTaiKhoanValid = true;
        isHoTenValid = true;
        isMatKhauValid = true;
        isEmailValid = true;
        isSoDTValid = true;
        isMaLoaiNguoiDungValid = true;
      }
    if (value === "") {
      message = name + " khong duoc rong";
      isNguoiDungValid = false;
    }
    else {
      switch (name) {
        case "taiKhoan":
          isTaiKhoanValid = message === "" ? true : false;
          if (value.length < 5) {
            message = "Vui long nhap lon hon 5 ki tu";
            isTaiKhoanValid = false
          } else if (listUsers.length > 0) {
            let index = listUsers.findIndex(user => {
              return user.taiKhoan === value
            })
            if (index !== -1) {
              message = "Tai khoan da ton tai";
              isTaiKhoanValid = false;
            }
          }
          break;
        case "hoTen":
          isHoTenValid = message === "" ? true : false;
          break;
        case "matKhau":
          isMatKhauValid = message === "" ? true : false;
          if (value.length < 6) {
            message = "Vui long mat khau lon hon 6 ki tu";
            isMatKhauValid = false;
          }
          break;
        case "email":
          isEmailValid = message === "" ? true : false;
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(value).toLowerCase())) {
            message = "email khong hop le";
            isEmailValid = false;
          } else if (listUsers.length > 0) {
            let index = this.props.listUsers.findIndex((user => {
              return user.email === value;
            }))
            if (index !== -1) {
              message = "Email da ton tai";
              isEmailValid = false;
            }
          }
          break;
        case "soDt":
          isSoDTValid = message === "" ? true : false;
          if (!value.match(/^\d{10}$/)) {
            message = " So dien thoai khong hop le";
            isSoDTValid = false;
          }
          break;
        case "maLoaiNguoiDung":
          isMaLoaiNguoiDungValid = message === "" ? true : false;
          break;
        default:
          break;
      }
      isNguoiDungValid = isTaiKhoanValid && isHoTenValid && isMatKhauValid && isEmailValid && isSoDTValid && isMaLoaiNguoiDungValid;
    }
    this.setState({
      error: {
        ...this.state.error, [name]: message
      },
      isValid: {
        isTaiKhoanValid,
        isHoTenValid,
        isMatKhauValid,
        isEmailValid,
        isSoDTValid,
        isMaLoaiNguoiDungValid,
        isNguoiDungValid
      }
    })
  }

  handleOnSubmit = () => {
    const user = { ...this.state.value };
    user.maNhom = "GP03";
    if (this.state.isValid.isNguoiDungValid) {
      if(this.props.userModal === ""){
        this.props.handleUser(user, "addUser");
      }
      else{
        this.props.handleUser(user, "editUser");
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
    let { userModal } = nextProps;
    let  { taiKhoan, hoTen, matKhau, email, soDt, maLoaiNguoiDung } = this.state.value;
    if (nextProps && userModal) {
      this.setState({
        value: {
          taiKhoan: userModal.taiKhoan,
          hoTen: userModal.hoTen,
          matKhau: userModal.matKhau,
          email: userModal.email,
          soDt: userModal.soDt,
          maLoaiNguoiDung: userModal.maLoaiNguoiDung
        }
      })
    }
    else  if(taiKhoan || hoTen || matKhau || email || soDt || maLoaiNguoiDung){
      this.setState({
        value: {
          taiKhoan: "",
          hoTen: "",
          matKhau: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: ""
        }
      })
    }

  }
  render() {
    let { taiKhoan, hoTen, matKhau, email, soDt, maLoaiNguoiDung } = this.state.value;
    return (
      <div className="modal fade" id="userModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{this.props.userModal === "" ? "ADD USER" : "EDIT USER"}</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
        </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className={`form-group ${this.state.error.taiKhoan !== "" ? "mb-0" : ""}`}>
                <label>User Name</label>
                <input
                  className="form-control"
                  placeholder="Enter your account"
                  name="taiKhoan"
                  value={taiKhoan}
                  onChange={this.handleOnChange}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                  disabled={this.props.userModal}
                />
              </div>
              {this.handleShowErrorMessage(this.state.error.taiKhoan)}
              <div className={`form-group ${this.state.error.hoTen !== "" ? "mb-0" : ""}`}>
                <label>Full Name</label>
                <input
                  className="form-control"
                  placeholder="Enter your full name"
                  name="hoTen"
                  value={hoTen}
                  onChange={this.handleOnChange}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                />
              </div>
              {this.handleShowErrorMessage(this.state.error.hoTen)}
              <div className={`form-group ${this.state.error.matKhau !== "" ? "mb-0" : ""}`}>
                <label>Password</label>
                <input
                  className="form-control"
                  placeholder="Enter your password"
                  type="password"
                  name="matKhau"
                  value={matKhau}
                  onChange={this.handleOnChange}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                />
              </div>
              {this.handleShowErrorMessage(this.state.error.matKhau)}
              <div className={`form-group ${this.state.error.email !== "" ? "mb-0" : ""}`}>
                <label>Email</label>
                <input
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={this.handleOnChange}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                />
              </div>
              {this.handleShowErrorMessage(this.state.error.email)}
              <div className={`form-group ${this.state.error.soDt !== "" ? "mb-0" : ""}`}>
                <label>Phone number</label>
                <input
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="soDt"
                  value={soDt}
                  onChange={this.handleOnChange}
                  onBlur={this.checkValidation}
                  onKeyUp={this.checkValidation}
                />
              </div>
              {this.handleShowErrorMessage(this.state.error.soDt)}
              <div className={`form-group ${this.state.error.maLoaiNguoiDung !== "" ? "mb-0" : ""}`}>
                <label htmlFor="selectGroup">Type User</label>
                <select className="form-control"
                  onChange={this.handleOnChange}
                  value={maLoaiNguoiDung}
                  name="maLoaiNguoiDung"
                >
                  <option value="">Plese choose Type User</option>
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </select>
              </div>
              {this.handleShowErrorMessage(this.state.error.maLoaiNguoiDung)}
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button className="btn btn-success" onClick={this.handleOnSubmit} disabled={!this.state.isValid.isNguoiDungValid}>{this.props.userModal === "" ? "Add" : "Edit"}</button>
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

export default ModalUser;