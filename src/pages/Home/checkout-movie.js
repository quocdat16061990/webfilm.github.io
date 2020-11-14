import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import Swal from 'sweetalert2'

import LoadingSpinners from "./../../components/loading-spinners/loading-spinners";
import SeatopContent from "./../../components/checkout/seat-topContent";
import SeatMap from "./../../components/checkout/seatmap";
import BookingCheckout from "./../../components/checkout/booking-checkout";
import ComboDetail from "./../../components/checkout/combo-detail";
import CheckoutModal from "./../../components/checkout/checkout-modal";
class CheckoutMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNameSelectedSeat: [],
      listSelectedSeat: [],
      checkoutCost: {
        isShowComboDetail: false,
        chairTotal: 0,
        upDownCombo1: 0,
        upDownCombo2: 0,
        methodpay: "",
      }

    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getListRoomTicket(id)
  }

  handleSelectedSeat = (nameRowseat, numberSeat, inforSeat) => {
    let priceTicket = String(inforSeat.giaVe).slice(0, String(inforSeat.giaVe).length - 3);
    let { listNameSelectedSeat, listSelectedSeat, checkoutCost } = this.state;
    let { chairTotal } = checkoutCost;
    /* nhấn lần đầu => chọn seat => push mã ghế và giá vé vào listSelectedSeat */
    /* listSelectedSeat[] chứa các mã ghế và giá vé được chọn */
    /* nhấn lại lần bỏ chọn => xóa mã ghế và giá vé trong listSelectedSeat[] */
    if(!inforSeat.daDat){
      let indexSelectedSeat = listSelectedSeat.findIndex(itemSelectedSeat => { // vi trí mã ghế
        return itemSelectedSeat.maGhe === inforSeat.maGhe;
      })
      if (indexSelectedSeat === -1) {
        listSelectedSeat.push({
          maGhe: inforSeat.maGhe,
          giaVe: inforSeat.giaVe
        });
        chairTotal += parseInt(priceTicket);
      }
      else {
        listSelectedSeat.splice(indexSelectedSeat, 1);
        chairTotal -= parseInt(priceTicket);
      }

      /* lấy tên ghế hiển thị lên chair-info*/
      let positionNameSelectedSeat = listNameSelectedSeat.findIndex(itemNameSelectedSeat => {
        return itemNameSelectedSeat === (nameRowseat + numberSeat);
      })
      if (positionNameSelectedSeat === -1) {
        listNameSelectedSeat.push(nameRowseat + numberSeat)
      }
      else {
        listNameSelectedSeat.splice(positionNameSelectedSeat, 1)
      }
      this.setState({
        listSelectedSeat,
        listNameSelectedSeat,
        checkoutCost: {...checkoutCost, chairTotal}
      });
    }
  };

  handleShowNameSelectedSeat = () => {
    let { listNameSelectedSeat } = this.state;
    let showName = ""
    if (listNameSelectedSeat.length > 0) {
      for (let item of listNameSelectedSeat) {
        showName = showName + " " + item;
      }
    }
    return showName;
  }

  handleShowComboDetail = isShowComboDetail => {
    let { checkoutCost } = this.state;
    this.setState({
      checkoutCost: {...checkoutCost, isShowComboDetail}
    });
  };

  handleUpDownCombo = (isUpDown, typeCombo) => {
    let { checkoutCost } = this.state;
    if (typeCombo === 1) {
      let { upDownCombo1 } = this.state.checkoutCost;
      if (isUpDown) {
        upDownCombo1++;
      }
      else {
        if (upDownCombo1 >= 1) {
          upDownCombo1--;
        }
      }
      this.setState({
        checkoutCost: {...checkoutCost, upDownCombo1}
      })
    }
    else if (typeCombo === 2) {
      let { upDownCombo2 } = this.state.checkoutCost;
      if (isUpDown) {
        upDownCombo2++;
      }
      else {
        if (upDownCombo2 >= 1) {
          upDownCombo2--;
        }
      }
      this.setState({
        checkoutCost: {...checkoutCost, upDownCombo2}
      })
    }
  }

  handleBookTicket = () => {
    this.props.history.push("");
    if(this.state.listSelectedSeat.length > 0){
      this.props.postBookTicket(
        {
          "maLichChieu": this.props.match.params.id,
          "danhSachVe": this.state.listSelectedSeat,
          "taiKhoanNguoiDung": JSON.parse(localStorage.getItem("userClient"))
        }
      );
    }
  }
  handleGetMethodpay = (event) => {
    let { checkoutCost } = this.state;
    this.setState({
      checkoutCost: {...checkoutCost, methodpay: event.target.value}
    })
  }
  render() {
    let { listRoomTicket } = this.props;
    let { time, listSelectedSeat, listNameSelectedSeat, checkoutCost} = this.state;
      // if(listRoomTicket){
    if(!localStorage.getItem("userClient")){
      Swal.fire('Bạn chưa đăng nhập vui lòng đăng nhập');
      return (<div className="my-5">
      </div>);
    }
    else if((listRoomTicket.hasOwnProperty("thongTinPhim")) && (listRoomTicket.hasOwnProperty("danhSachGhe"))){
      return (
        <div className="checkout row mx-0">
          <div className="seatcheckout col-12 col-md-9 px-0">

            {/* seat-topContent */}
            <SeatopContent time={time} listRoomTicket={listRoomTicket} handleBookTicket={this.handleBookTicket}/>

            {/* seatmap  */}
            <SeatMap listRoomTicket={listRoomTicket} listSelectedSeat={listSelectedSeat} handleSelectedSeat={this.handleSelectedSeat} />

          </div>
          {/* bookingcheckout */}
          <BookingCheckout thongTinPhim={listRoomTicket.thongTinPhim} listNameSelectedSeat={listNameSelectedSeat} checkoutCost={checkoutCost} handleShowNameSelectedSeat={this.handleShowNameSelectedSeat} handleShowComboDetail={this.handleShowComboDetail} handleGetMethodpay={this.handleGetMethodpay} />
          <ComboDetail checkoutCost={checkoutCost} handleShowComboDetail={this.handleShowComboDetail} handleUpDownCombo={this.handleUpDownCombo} />
          <CheckoutModal listRoomTicket={listRoomTicket} listNameSelectedSeat={listNameSelectedSeat} handleShowNameSelectedSeat={this.handleShowNameSelectedSeat}  checkoutCost={checkoutCost} handleBookTicket={this.handleBookTicket} />
        </div>
      );
    }
    else{
      return <LoadingSpinners listRoomTicket={listRoomTicket}/>;
    }

  }
}
const mapStateToDrops = state => {
  return {
    listRoomTicket: state.movieReducer.listRoomTicket
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListRoomTicket: id => {
      dispatch(action.actGetListRoomTicket(id));
    },
    postBookTicket: ticket => {
      dispatch(action.actPostBookTicket(ticket));
    }
  };
}
export default connect(mapStateToDrops, mapDispatchToDrops) (CheckoutMovie);