import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import DashboardPaginate from "./dashboard-paginate";
class DashboardDetail extends Component {
  renderListDashboard = () => {
    let { listDashboard, typeChoose } = this.props;
    if (typeChoose === "Phim") {
      return (
        <Fragment>
          <thead>
            <tr className="thead-dark">
              <th scope="col">ID Movie</th>
              <th scope="col">Image</th>
              <th scope="col">ID Movie</th>
              <th scope="col">Premiere Date</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <DashboardPaginate listDashboard={listDashboard} typeChoose={typeChoose} handleMovie={this.props.handleMovie} handleTypeMovieModal={this.props.handleTypeMovieModal} />
          </tbody>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <thead>
            <tr className="thead-dark">
              <th scope="col">#</th>
              <th scope="col">Account</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <DashboardPaginate listDashboard={listDashboard} typeChoose={typeChoose} handleUser={this.props.handleUser} handleTypeUserModal={this.props.handleTypeUserModal} />
          </tbody>
        </Fragment>
      );
    }
  };

  handleClearModal = () => {
    this.props.handleTypeUserModal("");
    this.props.handleTypeMovieModal("");
  }

  render() {
    return (
      <div className={`dash-board px-3 ${this.props.isShowManagement ? "col-9" : "col-12"}`}>
        <h5 className="text-center">
          <i className="fa fa-desktop pr-2" />
          Dashboard {this.props.typeChoose === "QuanTri" ? "Admin" : (this.props.typeChoose === "KhachHang" ? "Client" : (this.props.typeChoose === "Phim" ? "Movie" : "") )}
        </h5>
        <div className="d-flex justify-content-between align-items-center mr-4">
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target={
              this.props.typeChoose === "Phim" ? "#movieModal" : "#userModal"
            }
            onClick={this.handleClearModal}
          >
            <i className="fa fa-plus mr-2" />
            Add {this.props.typeChoose === "Phim" ? "Movie" : "User"}
          </button>
          <div action="#" className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="border-0"
                placeholder="Search for Coureses"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onKeyUp={this.props.handleSearch}
              />
              <button className="border-0" type="submit">
                <i className="fa fa-search mr-2"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 mr-4">
          <table
            className="table table-striped table-bordered table-sm"
            id="dashboard-table"
          >
            {this.renderListDashboard()}
          </table>
        </div>
      </div>
    );
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    deleteUser: idUser => {
      dispatch(action.actDeleteUser(idUser));
    }
  };
};
export default connect(null, mapDispatchToDrops)(DashboardDetail);
