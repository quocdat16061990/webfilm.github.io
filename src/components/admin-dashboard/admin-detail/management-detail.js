import React, { Component } from 'react';
class ManagementDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTypeUser: false
    }
  }

  handleShowTypeUser = () => {
    this.setState({
      isShowTypeUser: !this.state.isShowTypeUser
    }, () => this.props.handleShowListDashboard(""))
  }

  render() {
    return (
      <div className="col-sm-3 management pl-0">
        <h5 className="text-center">
          <i className="fa fa-tools pr-2" />
          Management
          </h5>
        <ul className="nav flex-column">
          <li className="nav-item collapsed" data-toggle="collapse" data-target="#user-detail" onClick={this.handleShowTypeUser} >
            <div className={`nav-link pl-3 ${(this.state.isShowTypeUser && this.props.typeChoose !== "Phim") ? "active" : ""}`}>
              <i className="fa fa-user pr-2" />
              <span style={{ marginRight: "45%" }}>Manage User</span>
              {this.state.isShowTypeUser ? <i class="fa fa-arrow-down"></i> : <i class="fa fa-arrow-right"></i>}

            </div>
          </li>
          {/* {
            this.state.isShowTypeUser ?
              <p className="mt-1" style={{ backgroundColor: (this.props.typeChoose === "QuanTri") ? "#33CCFF" : "" }} onClick={() => this.props.handleShowListDashboard("QuanTri")}>
                Admin
              </p> : ""
          }
          {
            this.state.isShowTypeUser ?
              <p style={{ backgroundColor: (this.props.typeChoose === "KhachHang") ? "#33CCFF" : "" }}
                onClick={() => this.props.handleShowListDashboard("KhachHang")}>User</p> : ""
          } */}
          <div id="user-detail" class="collapse mx-4">
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header" style={{paddingLeft: "45px"}}>Manage User</h6>
              <p className={`mt-1 ${(this.props.typeChoose === "QuanTri") ? "user-type-active" : ""}`} onClick={() => this.props.handleShowListDashboard("QuanTri")}>
                Admin
              </p>
              <p className={`${(this.props.typeChoose === "KhachHang") ? "user-type-active" : ""}`}
                onClick={() => this.props.handleShowListDashboard("KhachHang")}>User</p>
            </div>
          </div>
          <li className="nav-item" onClick={() => this.props.handleShowListDashboard("Phim")}>
            <div className={`nav-link pl-3 ${(this.props.typeChoose === "Phim") ? "active" : ""}`}>
              <i className="fa fa-film pr-2" />
              Movie
        </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ManagementDetail;