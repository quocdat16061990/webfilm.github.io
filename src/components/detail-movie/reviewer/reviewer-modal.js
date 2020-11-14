import React, { Component } from 'react';

class ReviewerModal extends Component {
  render() {
    return (
      <div
        className="modal fade xxxx"
        role="dialog"
        id="reviewerModal"
        style={{zIndex: 10000}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right mt-2 mr-3"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="reviewerStar">
              <p className="mb-0 text-center">{this.props.numberRate}</p>
              <div className="rate">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  defaultValue={5}
                  autoComplete="off"
                />
                <label
                  htmlFor="star5"
                  title="text"
                  onClick={() => this.props.getNumberReviewerRateStar(5)}
                >
                  5 stars
                      </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  defaultValue={4}
                  autoComplete="off"
                />
                <label
                  htmlFor="star4"
                  title="text"
                  onClick={() => this.props.getNumberReviewerRateStar(4)}
                >
                  4 stars
                      </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  defaultValue={3}
                  autoComplete="off"
                />
                <label
                  htmlFor="star3"
                  title="text"
                  onClick={() => this.props.getNumberReviewerRateStar(3)}
                >
                  3 stars
                      </label>
                <input
                  type="radio"
                  id="star2"
                  name="rate"
                  defaultValue={2}
                  autoComplete="off"
                />
                <label
                  htmlFor="star2"
                  title="text"
                  onClick={() => this.props.getNumberReviewerRateStar(2)}
                >
                  2 stars
                      </label>
                <input
                  type="radio"
                  id="star1"
                  name="rate"
                  defaultValue={1}
                  autoComplete="off"
                />
                <label
                  htmlFor="star1"
                  title="text"
                  onClick={() => this.props.getNumberReviewerRateStar(1)}
                >
                  1 star
                      </label>
              </div>
            </div>
            <form onSubmit={this.props.handleSubmit}>
              <div className="form-group m-3">
                <textarea
                  className="form-control"
                  rows={3}
                  id="comment"
                  placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này"
                  defaultValue={""}
                  name="textReviewer"
                  required
                  onChange={this.props.handleOnChange}
                  value={this.props.textReviewer}
                />
                <button
                  className="btn py-2 px-3 text-right mt-4"
                  type="submit"
                >
                  Đăng
                      </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewerModal;