import React, { Component } from "react";

class Showinginfo extends Component {
  render() {
    let { inforMovie } = this.props;
    return (
      <div
        className="tab-pane fade mt-5"
        id="showingInfo"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="row detailMainStyle mx-2 mx-md-0">
          <div className="col-sm-6 col-xs-12 infor-left">
            <div className="rowLeftInfo d-flex">
              <p className="contentTitle">Bí danh</p>
              <p className="contentInfo">{inforMovie.biDanh}</p>
            </div>
            <div className="rowLeftInfo d-flex">
              <p className="contentTitle">Ngày phát hành</p>
              <p className="contentInfo">
                {new Date(inforMovie.ngayKhoiChieu).toLocaleDateString()}
              </p>
            </div>
            <div className="rowLeftInfo d-flex">
              <p className="contentTitle">Định dạng</p>
              <p className="contentInfo">2D/Digital</p>
            </div>

            <div className="rowLeftInfo d-flex">
              <p className="contentTitle">Gía vé</p>
              <p className="contentInfo">
                {inforMovie.lichChieu ? inforMovie.lichChieu[0].giaVe : ""} VNĐ
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 infor-left">
            <div className="rowLeftInfo">
              <p className="contentTitle">Mô tả</p>
              <p className="contentInfoFull">{inforMovie.moTa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showinginfo;
