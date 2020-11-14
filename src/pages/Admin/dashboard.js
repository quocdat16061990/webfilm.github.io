import React, { Component, Fragment } from 'react';
import AdminPannel from "./../../components/admin-dashboard/admin-pannel";
import AdminDetail from "./../../components/admin-dashboard/admin-detail";
import Swal from 'sweetalert2'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowManagement: true
    }
  }
  handleIsShowManagement = () => {
    this.setState({
      isShowManagement: !this.state.isShowManagement
    })
  }
  render() {

    if(localStorage.getItem("userAdmin")){
      return (
        <div>
          <Fragment>
            <AdminPannel isShowManagement={this.state.isShowManagement} handleIsShowManagement={this.handleIsShowManagement}/>
          </Fragment>
          <AdminDetail isShowManagement={this.state.isShowManagement} />
        </div>
      );
    }
    Swal.fire('Bạn chưa đăng nhập vui lòng đăng nhập')
    .then(result => {
      this.props.history.push("/admin/login")
    })
    return null;
  }
}

export default Dashboard;