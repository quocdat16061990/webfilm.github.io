import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    }
  }
  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.loginAdmin(this.state, this.props.history)
  }
  render() {
    return (
      <div className="container admin-login" style={{ fontSize: "18px", backGround: "#f8f9fc" }}>
        <div className="col-sm-5 mx-auto mt-5" style={{ boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15) !important" }}>
          <form onSubmit={this.handleOnSubmit}>
            <h3 class="text-center">Please sign in</h3>
            <div className="form-group">
              <label htmlFor /> User name
              <div class="input-group">
                <i class="fa fa-user"></i>
                <input
                  type="text"
                  name="taiKhoan"
                  id
                  placeholder="ID"
                  aria-describedby="helpId"
                  onChange={this.handleOnChange}
                />
              </div>

            </div>
            <div className="form-group">
              <label htmlFor /> Password
              <div class="input-group">
                <i class="fa fa-lock"></i>
                <input
                  type="text"
                  name="matKhau"
                  id
                  placeholder="Password"
                  aria-describedby="helpId"
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group checked">
              <input
                type="checkbox"
                id="input-login-checked"
                className="login__checkbox"
              />
              <span className="login__checkmark" />
              <label htmlFor="input-login-checked">
                Remember me
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-success w-100 mt-2" type="submit">
                Login
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToDrops = dispatch => {
  return {
    loginAdmin: (admin, history) => {
      dispatch(action.actPostLoginAdmin(admin, history))
    }
  }
}
export default connect(null, mapDispatchToDrops)(AdminLogin);