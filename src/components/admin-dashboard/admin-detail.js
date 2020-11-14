import React, { Component } from 'react';
import ManagementDetail from "./admin-detail/management-detail";
import DashboardDetail from "./admin-detail/dash-board-detail";
import ModalUser from "./admin-detail/modal/modal-user";
import ModalMovie from "./admin-detail/modal/modal-movie";
import ModalShowTimeMovie from "./admin-detail/modal/modal-showtime-movie";
import Swal from 'sweetalert2'
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
class AdminDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      typeChoose: "",
      listDashboard: [],    // contain list đã phân loại(phim, khách hàng, quản trị)
      userModal: "",       //contain item user
      movieModal: "",       //contain item movie
      keySearch: ""
    }
  }
  componentDidMount(){
    this.props.getListUsers();
    this.props.getListMovies();
  }
  handleSearch = event => {
    this.setState({
      keySearch: event.target.value
    },() => this.handleShowListDashboard(this.state.typeChoose))
  }
  handleShowListDashboard = (typeChoose) => {
    let { listUsers, listMovies } = this.props;
    let { keySearch } = this.state;
    let listDashboard = [];
    if(typeChoose === "Phim"){
      listDashboard = [...listMovies];
      if(keySearch !== ""){
        for(let index = 0; index < listDashboard.length; index++){
          if(listDashboard[index].tenPhim.toLowerCase().indexOf(keySearch.toLowerCase()) === -1){
            listDashboard.splice(index, 1);
            index--;
          }
        }
      }
    }
    else{
      for(let itemUser of listUsers){
        if(itemUser.maLoaiNguoiDung === typeChoose){
          listDashboard.push(itemUser)
        }
      }
      if(keySearch !== ""){
        for(let index = 0; index < listDashboard.length; index++){
          if(listDashboard[index].hoTen.toLowerCase().indexOf(keySearch.toLowerCase()) === -1){
            listDashboard.splice(index, 1);
            index--;
          }
        }
      }
    }

    this.setState({
      listDashboard,
      typeChoose
    })
  }
  handleTypeUserModal = (userModal) => {
    this.setState({
      userModal
    })
  }
  componentDidUpdate(prevProps){
      if((prevProps.listUsers !== this.props.listUsers) || (prevProps.listMovies !== this.props.listMovies)){
        let { typeChoose } = this.state;
        this.handleShowListDashboard(typeChoose);
      }
  }
  /* ---------------------------------- */
  handleUser = (user, typeHandle) => {
    if(typeHandle === "addUser"){
     this.props.addUser(user);
    }
    else if(typeHandle === "deleteUser"){
      Swal.fire({
        title: 'Bạn có muốn xóa người dùng',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có',
        cancelButtonText: "Hủy bỏ"
      }).then((result) => {
        if (result.value) {
          this.props.deleteUser(user.taiKhoan)
        }
      })
    }
    else if(typeHandle === "editUser"){
      this.props.editUser(user);
      this.setState({
        userModal: user
      })
    }
  }

  handleTypeMovieModal = movieModal => {
    this.setState({
      movieModal
    })
  }
  handleMovie = (movie, typeHandle) => {
    if(typeHandle === "addMovie"){
     this.props.addMovie(movie);
    }
    else if(typeHandle === "deleteMovie"){
      Swal.fire({
        title: 'Bạn có muốn xóa phim',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có',
        cancelButtonText: "Hủy bỏ"
      }).then((result) => {
        if (result.value) {
          this.props.deleteMovie(movie.maPhim)
        }
      })
    }
    else if(typeHandle === "editMovie"){
      this.props.editMovie(movie);
      this.setState({
        movieModal: movie
      })
    }
    else if(typeHandle === "addShowTime"){
      this.props.addShowtimeMovie(movie);
    }
  }

  render() {
    let { listDashboard, typeChoose } = this.state;
    return (
      <section className="admin-detail pt-4 row mx-0">
        {this.props.isShowManagement ? <ManagementDetail handleShowListDashboard={this.handleShowListDashboard} typeChoose={typeChoose} />: ""}
        <DashboardDetail listDashboard={listDashboard} typeChoose={typeChoose} handleUser={this.handleUser} handleTypeUserModal={this.handleTypeUserModal} handleMovie={this.handleMovie} handleTypeMovieModal={this.handleTypeMovieModal} handleSearch={this.handleSearch} isShowManagement={this.props.isShowManagement}/>
        <ModalUser listUsers={this.props.listUsers} handleUser={this.handleUser} userModal={this.state.userModal} />
        <ModalMovie movieModal={this.state.movieModal} handleMovie={this.handleMovie} />
        <ModalShowTimeMovie movieModal={this.state.movieModal} handleMovie={this.handleMovie} />
      </section>
    );
  }
}
const mapStateToDrops = (state) => {

  return {
    listUsers: state.movieReducer.listUsers,
    listMovies: state.movieReducer.listMovies
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListUsers: () => {
      dispatch(action.actGetListUser())
    },
    getListMovies: () => {
      dispatch(action.actGetListMovies())
    },
    addUser: user => {
      dispatch(action.actAddUser(user))
    },
    deleteUser: idUser => {
      dispatch(action.actDeleteUser(idUser))
    },
    editUser: user => {
      dispatch(action.actEditUser(user))
    },
    addMovie: movie => {
      dispatch(action.actAddMovie(movie))
    },
    deleteMovie: idMovie => {
      dispatch(action.actDeleteMovie(idMovie))
    },
    editMovie: movie => {
      dispatch(action.actEditMovie(movie))
    },
    addShowtimeMovie: showtime => {
      dispatch(action.actAddShowTime(showtime))
    }
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops) (AdminDetail);