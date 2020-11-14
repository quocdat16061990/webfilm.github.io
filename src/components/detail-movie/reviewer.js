import React, { Component } from "react";
import ReviewerItem from "./reviewer/reviewer-item";
import Swal from 'sweetalert2'
import $ from "jquery";
class Reviewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberRate: 0,
      textReviewer: "",
      listReviewer: []
    }
  }
  handleAddReviewer = () => {
    let { listReviewer } = this.state;
    if (listReviewer.length > 0) {
      return listReviewer.map((item, index) => {
        return <ReviewerItem key={index} comment={item} index={index} />;
      });
    }
    else if(JSON.parse(localStorage.getItem("listReviewer"))){
      listReviewer = JSON.parse(localStorage.getItem("listReviewer"));
      listReviewer = listReviewer.reverse();
      return listReviewer.map((item, index) => {
        return <ReviewerItem key={index} comment={item} index={index} />;
      });
    }
  };
  handleShowModalReviewer = () => {
    if(localStorage.getItem("userClient")){
      $("#reviewerModal").modal("show");
    }
    else{
      Swal.fire('Bạn chưa đăng nhập vui lòng đăng nhập')
    }
  }
  render() {
    return (
      <div
        className="tab-pane fade mt-5  mx-2 mx-md-0"
        id="showingReviewer"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div
          className="col-sm-12 col-xs-12 dadInputReviewer px-0"
          onClick={this.handleShowModalReviewer}
        >
          <img
            src="https://123phim.vn/app/assets/img/avatar.png"
            alt=""
            className="img-fluid imgReviewer mr-1"
          />
          <input
            type="text"
            className="inputReviwer"
            placeholder="Bạn nghĩ gì về phim này?"
            maxLength={100}
          />
          <span className="imgReviewerStar">
            <img
              src="https://123phim.vn/app/assets/img/icons/listStar.png"
              alt=""
              className="img-fluid"
            />
          </span>
        </div>
        <div className="listComment mt-5">{this.handleAddReviewer()}</div>
      </div>
    );
  }
}

export default Reviewer;
