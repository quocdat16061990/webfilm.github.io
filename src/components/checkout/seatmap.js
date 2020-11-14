import React, { Component } from 'react';

class SeatMap extends Component {
  handleStyleSelectedSeat = (inforSeat) => {
    let { listSelectedSeat } = this.props;
    if (inforSeat.daDat) {
      return {
        color: "transparent",
        background: "rgba(16,34,53,.2)",
        borderColor: "rgba(16,34,53,.2)"
      };
    }
    else if (listSelectedSeat.length > 0) {
      /* duyer mang listSelectedSeat nếu tồn tại mã ghế trong listSelectedSeat[]=> seat đc chọn */
      let index = listSelectedSeat.findIndex((itemSelectedSeat) => {
        return itemSelectedSeat.maGhe === inforSeat.maGhe;
      })
      if (index !== -1) {
        return {
          color: "#fff",
          background: "#fb4226",
          borderColor: "#fb4226"
        };
      }
      else if (inforSeat.loaiGhe === "Vip") {
        return {
          borderColor: "#f7b500"
        }
      };
    }
    else if (inforSeat.loaiGhe === "Vip") {
      return {
        borderColor: "#f7b500"
      }
    };
  };
  renderListSeat = () => {
    let { listRoomTicket } = this.props;
    let count = 0;
    let listSeat = [];
    if (listRoomTicket.danhSachGhe) {
      for (
        let i = count;
        i < listRoomTicket.danhSachGhe.length / 10 && i < 5;
        i++
      ) {
        let rowseat = listRoomTicket.danhSachGhe.slice(i * 10, i * 10 + 10);
        listSeat.push(
          <div className="rowseat py-2">
            <span className="rowname">{String.fromCharCode(65 + i)}</span>
            {this.renderRowSeat(rowseat, String.fromCharCode(65 + i))}
          </div>
        );
      }
    }
    return listSeat;
  };
  renderRowSeat = (rowseat, nameRowseat) => {
    return rowseat.map((inforSeat, index) => {
      return (
        <span
          className="seat-wrapper"
          key={index}
          onClick={() => this.props.handleSelectedSeat(nameRowseat, index + 1, inforSeat)}
          style={this.handleStyleSelectedSeat(inforSeat)}
        >
          {index + 1 < 10 ? "0" + (index + 1) : index + 1}
        </span>
      );
    });
  };
  render() {
    return (
      <div className="seatmap mt-3">
        <div className="seatmanroom">
          <div className="screen">
            <img
              className="img-fluid d-block m-auto"
              style={{ width: "90%" }}
              src="https://123phim.vn/app/assets/img/icons/screen.png"
              alt=""
            />
          </div>
          <div className="listseat text-center">
            {this.renderListSeat()}
          </div>
          <div className="noteseat text-center d-flex justify-content-center">
            <div className="typeseats">
              <span
                className="typeseats__color"
                style={{ border: "1px solid #fb4226" }}
              />
              <span className="typeseats__name">Ghế thường</span>
            </div>
            <div className="typeseats">
              <span
                className="typeseats__color"
                style={{ border: "1px solid #f7b500" }}
              />
              <span className="typeseats__name">Ghế VIP</span>
            </div>
            <div className="typeseats">
              <span
                className="typeseats__color"
                style={{ backgroundColor: "#fb4226" }}
              />
              <span className="typeseats__name">Ghế đang chọn</span>
            </div>
            <div className="typeseats">
              <span
                className="typeseats__color"
                style={{ backgroundColor: "rgba(16,34,53,.2)" }}
              />
              <span className="typeseats__name">Ghế đã có người chọn</span>
            </div>
            <div className="typeseats">
              <span
                className="typeseats__color"
                style={{
                  backgroundColor: "rgba(16,34,53,.2)",
                  position: "relative"
                }}
              >
                <img
                  src="https://123phim.vn/app/assets/img/icons/xController.png"
                  alt=""
                  className="img-fluid notChoose"
                />
              </span>
              <span className="typeseats__name">Ghế không thể chọn</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeatMap;