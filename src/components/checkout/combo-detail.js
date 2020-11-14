import React, { Component } from 'react';

class ComboDetail extends Component {
  render() {
    let { checkoutCost } = this.props;
    if (checkoutCost.isShowComboDetail) {
      return (
        <div className="combo-detail col-12 col-md-4 col-lg-3">
          <i
            className="fa fa-arrow-right text-center d-block my-3"
            onClick={() => this.props.handleShowComboDetail(false)}
          />
          <h5 className="py-2 pl-3" style={{ backgroundColor: "#ebebec" }}>
            COMBO
            </h5>
          <div className="combo-info mt-3 d-flex justify-content-between align-items-center">
            <img
              className="img-fluid"
              src="https://images.foody.vn/res/g26/250810/s180x180/foody-cgv-cinemas-aeon-mall-binh-tan-993-636049218734050981.jpg"
              alt=""
            />
            <div className="combo-price">
              <p className="mb-1">COMBO1</p>
              <p className="mb-1">55.000 đ</p>
            </div>
            <div>
              <button className="btn" onClick={() => this.props.handleUpDownCombo(false, 1)}>-</button> {checkoutCost.upDownCombo1}{" "}
              <button className="btn" onClick={() => this.props.handleUpDownCombo(true, 1)}>+</button>
            </div>
          </div>
          <div className="combo-info mt-3 d-flex justify-content-between align-items-center">
            <img
              className="img-fluid"
              src="https://www.venuscinema.vn/uploaded/khuyen-mai-uu-dai/combo-khung-venus-cinema-hoa-binh.jpg"
              alt=""
            />
            <div className="combo-price">
              <p className="mb-1">COMBO2</p>
              <p className="mb-1">65.000 đ</p>
            </div>
            <div>
              <button className="btn" onClick={() => this.props.handleUpDownCombo(false, 2)}>-</button> {checkoutCost.upDownCombo2}{" "}
              <button className="btn" onClick={() => this.props.handleUpDownCombo(true, 2)}>+</button>
            </div>
          </div>
        </div>
      );
    }
    return null
  }
}

export default ComboDetail;