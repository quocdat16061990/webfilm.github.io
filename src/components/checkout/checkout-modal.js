import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
class CheckoutModal extends Component {
  renderModalInfoTicket = () => {
    let { listRoomTicket, checkoutCost } = this.props;
    return (
      // * Modal show info ticket*
      <div
        className="modal fade"
        role="dialog"
        id="checkoutModalInfoTicket"
        data-backdrop="static"
      >
        <div className="modal-dialog" style={{ minWidth: "450px" }}>
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header justify-content-around mt-3">
              <h4 className="modal-title text-center">
                Cảm ơn bạn đã đặt vé
                  <p className="mb-0">TED 2</p>
              </h4>
            </div>
            <div className="modal-body mt-3 mb-5">
              <div className="row">
                <div className="col-sm-6">
                  <h5 className="mb-3">Thông tin vé</h5>
                  <div className="info-item">
                    <span>Mã vé</span>
                    <span style={{ color: "#fb4226" }}>#{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="info-item">
                    <span>Vị trí ghế</span>
                    <span>{this.props.handleShowNameSelectedSeat()}</span>
                  </div>
                  <div className="info-item">
                    <span> Ngày chiếu</span>
                    <span>{listRoomTicket.thongTinPhim.ngayChieu}</span>
                  </div>
                  <div className="info-item">
                    <span>Giờ chiếu</span>
                    <span>{listRoomTicket.thongTinPhim.gioChieu}</span>
                  </div>
                  <div className="info-item">
                    <span>phòng chiếu</span>
                    <span>{listRoomTicket.thongTinPhim.tenRap}</span>
                  </div>
                  <div className="info-item">
                    <span>Tài khoản</span>
                    <span>{JSON.parse(localStorage.getItem("userClient"))}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h5 className="mb-3">Thông tin thanh toán</h5>
                  <div className="info-item">
                    <span>Phương thức</span>
                    <span>{checkoutCost.methodpay}</span>
                  </div>
                  <div className="info-item">
                    <span>Tổng tiền</span>
                    <span>{(checkoutCost.chairTotal + checkoutCost.upDownCombo1 * 55 + checkoutCost.upDownCombo2 * 65) + ".000 đ"}</span>
                  </div>
                </div>
              </div>
              <div className="close btn" data-dismiss="modal" onClick={() => this.props.handleBookTicket()}>OK</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderModalNotification = () => {
    let { listNameSelectedSeat} = this.props;
    return (
        // Modal show info notification
        <div class="modal fade" role="dialog" id="checkoutModalNotification">
          <div class="modal-dialog">
            <div class="modal-content text-center px-5 py-3">
              {listNameSelectedSeat.length === 0 ? "Vui lòng chọn ghế" : "Vui lòng chọn hình thức thanh toán"}
              <Link class="close btn" data-dismiss="modal" to="">OK</Link>
            </div>
          </div>
        </div>
    )
  }/*
  renderModalTimerOut = () => {
    return (
      // Modal show timer out
      <div class="modal fade" role="dialog" id="checkoutModalTimerout" data-backdrop="static">
        <div class="modal-dialog">
          <div class="modal-content text-center px-5 py-3">
            Hết thời gian giữ ghế
            <div class="close btn" data-dismiss="modal" onClick={() => this.props.handleBookTicket()}>OK</div>
          </div>
        </div>
      </div>
  )
  }
  */
  render() {
    return (
      <Fragment>
        {this.renderModalInfoTicket()}
        {this.renderModalNotification()}
      </Fragment>
    );
  }
}

export default CheckoutModal;