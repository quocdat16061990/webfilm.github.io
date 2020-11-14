import React, { Component } from 'react';
class BookingCheckout extends Component {
  render() {
    let { listNameSelectedSeat, checkoutCost, thongTinPhim } = this.props;
    return (
      <div className="bookingcheckout col-12 col-md-3 px-0">
        <div className="bookingcheckout__content">
          <p className="totalcost text-center mt-4">{((checkoutCost.chairTotal + checkoutCost.upDownCombo1 * 55 + checkoutCost.upDownCombo2 * 65) !== 0) ? (checkoutCost.chairTotal + checkoutCost.upDownCombo1 * 55 + checkoutCost.upDownCombo2 * 65) + ".000 đ" : "0 đ"}</p>
          <div className="film-info">
            <p className="film-name mb-1">
              <span className="mr-2">C18</span>
              <span>{thongTinPhim.tenPhim}</span>
            </p>
            <p className="cinema-address mb-1">
              <span>{thongTinPhim.tenCumRap.slice(0, thongTinPhim.tenCumRap.indexOf("-"))}</span>
              <span>{thongTinPhim.tenCumRap.slice(thongTinPhim.tenCumRap.indexOf("-"), thongTinPhim.tenCumRap.length)}</span>
            </p>
            <p className="cinema-hour mb-1">
            {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}
                </p>
          </div>
          <div className="chair d-flex py-3 align-items-center">
            <div className="chair-info col-sm-7 px-0">
              <span style={{ color: "#9b9b9b" }} className="mr-2">
                Ghế

                  </span>
              <span style={{ color: "#000" }}>{this.props.handleShowNameSelectedSeat()}</span>
            </div>
            <div
              className="chair-total col-sm-5 pl-0 text-right mr-1"
              style={{ color: "#44c020" }}
            >
              {checkoutCost.chairTotal !== 0 ? checkoutCost.chairTotal + ".000 đ" : "0 đ"}
            </div>
          </div>
          <div className="info-user py-3">
            <p className="mb-0" style={{ color: "#9b9b9b" }}>
              Tài khoản
                </p>
          <p className="mb-0">{JSON.parse(localStorage.getItem("userClient"))}</p>
          </div>
          <div
            className="combo py-3 d-flex align-items-center"
            onClick={() => this.props.handleShowComboDetail(true)}
          >
            <div className="col-sm-2 px-0">
              <img
                src="https://www.cgv.vn/media/wysiwyg/Newsoffer2/OCT18/CGV-350x496.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <span className="col-sm-5 px-0">Combo</span>
            <span className="totalCombo col-sm-5 pl-0 text-right mr-1">{(checkoutCost.upDownCombo1 + checkoutCost.upDownCombo2) !== 0 ? (checkoutCost.upDownCombo1 * 55 + checkoutCost.upDownCombo2 * 65) + " .000 đ" : "0 đ"}</span>
          </div>
          <div className="methodpay py-3" onChange={this.props.handleGetMethodpay}>
            <p className="mb-1">Hình thức thanh toán</p>
            <label className="paymentParent my-1">
              <input
                type="radio"
                name="method"
                defaultValue="ZALOPAY"
                autoComplete="off"
              />
              <span className="checkmark" />
              <img
                src="https://s3img.vcdn.vn/123phim/2018/12/08075f42d0c4bfc8f2063a35d5b9fca7.jpg"
                alt=""
                className="img-fluid"
              />
              <span>Thanh toán qua ZaloPay</span>
            </label>
            <label className="paymentParent my-1">
              <input
                type="radio"
                name="method"
                defaultValue="Momo"
                autoComplete="off"
              />
              <span className="checkmark" />
              <img
                src="https://media.licdn.com/dms/image/C560BAQHQpbHVY2TwBA/company-logo_200_200/0?e=2159024400&v=beta&t=kOBUbl9tpwSnJHjjAJEMW_Q4QfRn5Wr37jzi4Hh178Q"
                alt=""
                className="img-fluid"
              />
              <span>Thanh toán qua Momo</span>
            </label>
          </div>
        </div>
        <button
          className="btn buyticket"
          data-toggle="modal"
          data-target={((listNameSelectedSeat.length !== 0) && (checkoutCost.methodpay !== "")) ? "#checkoutModalInfoTicket" : "#checkoutModalNotification"}
        >
          Đặt Vé
            </button>
      </div>
    );
  }
}

export default BookingCheckout;
