import React, { Component } from "react";
import SignIn from "./modal-login/sign-in";
import SignUp from "./modal-login/sign-up";
import $ from "jquery";
import logo from "./../../assets/img/logo.png"

class ModalLogin extends Component {
  handleCloseModal = () => {        // ko dùng được data-dismiss
    $('#modal-login').modal('hide');
    $('#modal-login').modal('dispose')
  }
  render() {
    return (
      <div className="modal text-center" tabIndex={-1} role="dialog" id="modal-login">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <img
              src={logo}
              alt=""
              className="signin--header img-fluid mt-3 mx-auto"
            />
            <div className="signin-close" data-dismiss="modal"></div>
            <div className="signin-info">
              <ul className="nav nav-tabs border-bottom-0" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="sign-in-tab"
                    data-toggle="tab"
                    href="#sign-in"
                    role="tab"
                    aria-controls="sign-in"
                    aria-selected="true"
                  >
                    Đăng nhập
          </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="sign-up-tab"
                    data-toggle="tab"
                    href="#sign-up"
                    role="tab"
                    aria-controls="sign-up"
                    aria-selected="false"
                  >
                    Đăng kí
          </a>
                </li>
              </ul>
              <div className="tab-content m-5" id="myTabContent">
                <SignIn handleCloseModal={this.handleCloseModal}/>
                <SignUp handleCloseModal={this.handleCloseModal}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogin;
