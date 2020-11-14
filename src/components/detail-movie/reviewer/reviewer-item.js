import React, { Component } from "react";

class ReviewerItem extends Component {
  handleShowRateStar = (number) => {
    let showRateStar = []
    for (let i = 0; i < number; i++) {
      showRateStar.push(<i class="fa fa-star"></i>)
    }
    return showRateStar;
  }
  render() {
    let { comment, index } = this.props;
    return (
      <div
        className="commnentItem w-50 px-2 py-3 mt-3"
        style={{ marginLeft: `${index % 2 === 0 ? "0" : "50%"}` }}
        key={index}
      >
        <div className="dadMainInfo d-flex justify-content-between align-items-center">
          <div className="infoReviewer">
            <i
              className="fa fa-user mr-2"
              style={{ color: "#fa5238", fontSize: 20 }}
            />
            <span>{comment.userClient}</span>
          </div>
          <div className="numberRateStar text-right">
            {this.handleShowRateStar(comment.numberReviewer)}
          </div>
        </div>
        <div className="dadMainComment mt-3">{comment.textReviewer}</div>
      </div>
    );
  }
}

export default ReviewerItem;
