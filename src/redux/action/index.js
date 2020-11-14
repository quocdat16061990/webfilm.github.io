import * as ActionType from "./../constants/actionType";
import Axios from "axios";
import Swal from 'sweetalert2'

// Lấy danh sách phim
const actGetListMovies = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_LIST_MOVIES,
        listMovies: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  };
};

const actGetInforMovie = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_INFOR_MOVIES,
        inforMovie: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetListPCinemas = () => {
  return dispatch => {
    Axios({
    method: "GET",
    url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
  })
  .then(result => {
    dispatch({
      type: ActionType.GET_INFOR_ListPCinemas,
      listPCinemas: result.data
    })

  })
  .catch(err => {
    console.log(err);
  })
  }
}

const actGetListCinemas = (idPCinema) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idPCinema}`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_INFOR_ListCinemas,
        listCinemas: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetListMoviesCinemas = (idPCinema) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${idPCinema}&maNhom=GP03`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_INFOR_ListMoviesCinemas,
        listMoviesCinemas: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetListShowMovies = (idShowMovies) => {
  return dispatch =>{
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idShowMovies}`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_LIST_SHOW_MOVIES,
        listShowMovies: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetNews = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d78df3fa8c271001498668d.mockapi.io/api/123phim-news"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_NEWS,
        listNews: result.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetNewsThumbnail = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d78df3fa8c271001498668d.mockapi.io/api/123phim-newsThumbnail"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_NEWS_THUMBNAIL,
        listNewsThumbnail: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actGetListUser = () => {
  return dispatch => {
    Axios({
      method:"GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_LIST_USERS,
        listUsers: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXQyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE1NzQ0ODU1OTgsImV4cCI6MTU3NDQ4OTE5OH0.RijLZrg1uClb-qDVQBQuZFjMj45U-HyKPIGlwClPiYI
const actPostSignUpUser = user => {  //Đăng kí
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXQyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE1NzQ0ODU1OTgsImV4cCI6MTU3NDQ4OTE5OH0.RijLZrg1uClb-qDVQBQuZFjMj45U-HyKPIGlwClPiYI'
      }
    })
    .then(result => {
      Swal.fire(
        'Đăng kí thành công!',
        '',
        'success'
      )
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data}`,
      })
    })
  }
}

const actPostLoginAdmin = (admin, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: admin
    })
    .then(result => {
      if(result.data.maLoaiNguoiDung === "QuanTri"){
        localStorage.setItem("userAdmin", JSON.stringify(result.data));
        history.push("/admin/dashboard");
      }
      else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Ban khong co quyen truy cap",
      })
      }
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data}`,
      })
    })
  }
}
const actGetListRoomTicket = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_LIST_ROOM_TICKET,
        listRoomTicket: result.data

      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

const actPostBookTicket = ticket => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: ticket,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXQyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE1NzQ0ODU1OTgsImV4cCI6MTU3NDQ4OTE5OH0.RijLZrg1uClb-qDVQBQuZFjMj45U-HyKPIGlwClPiYI'
      }
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);

    })
  }
}

// ADMIN
const actAddUser = user => {
  console.log("actAddUser");
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire("Add user successful");
      dispatch(actGetListUser());
    })
    .catch(err => {
      Swal.fire(err.response.data);
    })
  }
}
const actDeleteUser = idUser => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${idUser}`,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire(result.data);
      dispatch(actGetListUser());
    })
    .catch(err => {
      Swal.fire(err.response.data);
    })
  }
}
const actEditUser = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "PUT",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire("Edit user successful")
      dispatch(actGetListUser());
    })
    .catch(err => {
      Swal.fire(err.response.data);
    })
  }
}

const actAddMovie = movie => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire("Add movie successful");
      dispatch(actGetListMovies());
    })
    .catch(err => {
      console.log(err.response.data);
      Swal.fire(err.response.data);
    })
  }
}

const actDeleteMovie = idMovie => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${idMovie}`,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire(result.data);
      dispatch(actGetListMovies());
    })
    .catch(err => {
      console.log(err);
      Swal.fire(err.response.data);
    })
  }
}

const actEditMovie = movie => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire("Edit Movie successful")
      dispatch(actGetListMovies());
    })
    .catch(err => {
      Swal.fire(err.response.data);
    })
  }
}

const actAddShowTime = showtime => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      data: showtime,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(result => {
      Swal.fire("Add Showtime Movie successful")
      dispatch(actGetListMovies());
    })
    .catch(err => {
      console.log(err.response.data);

      Swal.fire(err.response.data);
    })
  }
}
export { actGetListMovies, actGetInforMovie, actGetListPCinemas, actGetListCinemas, actGetListMoviesCinemas, actGetListShowMovies, actGetNews, actGetNewsThumbnail, actGetListUser, actPostSignUpUser, actPostLoginAdmin, actGetListRoomTicket, actPostBookTicket, actAddUser, actDeleteUser, actEditUser, actAddMovie, actDeleteMovie, actEditMovie, actAddShowTime};
