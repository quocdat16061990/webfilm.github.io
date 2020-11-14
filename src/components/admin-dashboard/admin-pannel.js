import React, { Component } from 'react';
import Swal from 'sweetalert2';
class AdminPannel extends Component {
  handSignOutAdmin = () => {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có',
      cancelButtonText: "Hủy bỏ"
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        localStorage.removeItem("userAdmin");
        window.location.reload();
      }
    })

  }
  renderToggleAdmin = () => {
    if(this.props.isShowManagement){
      return(
        <div className="col-3 px-0 text-center  py-3" style={{ backgroundColor: "#4C60DA", fontSize: "24px" }} >
          <i className="fa fa-atom mr-2" />
          <span>My Admin</span>
        </div>
      )
    }
  }
  render() {
    const userAdmin = JSON.parse(localStorage.getItem("userAdmin"))
    return (
      <section className="admin-pannel row mx-0">
        {this.renderToggleAdmin()}
        <div className={`px-5 d-flex align-items-center justify-content-end ${this.props.isShowManagement ? "col-9" : "col-12"}`} style={{ backgroundColor: "#6777EF" }}>
          <span className="sidebar-toggle" onClick={this.props.handleIsShowManagement} style={{transform: `${this.props.isShowManagement ? " translateX(-670px)" : "translateX(-1000px)"}`}}><i class="fa fa-bars"></i></span>
          <span onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}>
            <i className="fa fa-home mr-1" /> Home
          </span>
          <span className="d-inline-block mx-3 my-2" style={{ borderRight: "1px solid #e3e6f0", height: "30px" }}></span>
          <span style={{ cursor: "pointer" }} data-toggle="dropdown">
          <img src="https://img.icons8.com/bubbles/2x/admin-settings-male.png" class="img-fluid" alt="" width="50px" />

            {userAdmin.hoTen}
          </span>
          <div class="dropdown-menu mt-3">
            <span class="dropdown-item" to="">
              <i class="fas fa-user fa-sm fa-fw mr-2"></i>
              Profile
                </span>
            <span class="dropdown-item" to="login" onClick={this.handSignOutAdmin}>
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
              Logout
                </span>
          </div>
        </div>
      </section>
    );
  }
}

export default AdminPannel;