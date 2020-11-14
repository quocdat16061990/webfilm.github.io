import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HomeApp extends Component {
  render() {
    return (
      <section className="appblock" id="appblock">
        <div className="col-xs-12 myContainer homeAppMovies" id="homeApp">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left homeApp__left">
              <p className="mb-2 mb-md-3">Ứng dụng tiện lợi dành cho</p>
              <p>người yêu điện ảnh</p>
              <br />
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
                quà hấp dẫn.
        </p>
              <button className="btn">App miễn phí - Tải về ngay!</button>
              <p className="pt-3">
                Our booking cinema có hai phiên bản
                <Link
                  to="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  target="_blank"
                  className="mx-1"
                >
                  iOS
                </Link>
                &amp;
                <Link
                  to="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  target="_blank"
                  className="mx-1"
                >
                  Android
          </Link>
              </p>
            </div>
            <div className="col-lg-6 homeApp__right p-0">
              <img
                src="https://123phim.vn/app/assets/img/icons/phone_hand.png"
                alt=""
                className="img-fluid"
                style={{width: "100%"}}
              />
              <div className="slider-screen">
                <div
                  id="appblockCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval={5000}
                  data-touch="true"
                  data-keyboard="true"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide0.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide1.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide2.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide3.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide4.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide5.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide6.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide7.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide8.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide9.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://123phim.vn/app/assets/img/icons/slide10.png"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeApp;