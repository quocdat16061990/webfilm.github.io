import * as ActionType from "./../constants/actionType";

let initState = {
  listMovies: [],           // /api/QuanLyPhim/LayDanhSachPhim
  inforMovie: [],           // /api/QuanLyPhim/LayThongTinPhim
  listPCinemas: [],         // /api/QuanLyRap/LayThongTinHeThongRap
  listCinemas: [],          // /api/QuanLyRap/LayThongTinCumRapTheoHeThong
  listMoviesCinemas: [],     // /api/QuanLyRap/LayThongTinLichChieuHeThongRap
  listShowMovies: [],         // /api/QuanLyRap/LayThongTinLichChieuPhim
  listNews: [],
  listNewsThumbnail: [],
  listUsers: [],
  listRoomTicket: {}          // /api/QuanLyRap/LayThongTinLichChieuPhim
}
const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIES:
      state.listMovies = action.listMovies;
      return { ...state };

    case ActionType.GET_INFOR_MOVIES:
      state.inforMovie = action.inforMovie;
      return { ...state };

    case ActionType.GET_INFOR_ListPCinemas:
      state.listPCinemas = action.listPCinemas;
      return { ...state };

    case ActionType.GET_INFOR_ListCinemas:
      state.listCinemas = action.listCinemas;
      return { ...state };

    case ActionType.GET_INFOR_ListMoviesCinemas:
      state.listMoviesCinemas = action.listMoviesCinemas;
      return { ...state };

    case ActionType.GET_LIST_SHOW_MOVIES:
      state.listShowMovies = action.listShowMovies;
      return { ...state };

    case ActionType.GET_NEWS:
      state.listNews = action.listNews;
      return { ...state }

    case ActionType.GET_NEWS_THUMBNAIL:
      state.listNewsThumbnail = action.listNewsThumbnail;
      return { ...state };

    case ActionType.GET_LIST_USERS:
      state.listUsers = action.listUsers;
      return {...state};

    case ActionType.GET_LIST_ROOM_TICKET:
      state.listRoomTicket = action.listRoomTicket;
      return { ...state};

    default:
      return { ...state };
  }
}
export default movieReducer;