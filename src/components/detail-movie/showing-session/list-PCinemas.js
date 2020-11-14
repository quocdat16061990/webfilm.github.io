import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
class ListPCinemas extends Component {
  componentDidMount(){
    this.props.getListPCinames();
  }
  renderListPCinames = () => {
    let { listPCinemas } = this.props;
    if (listPCinemas) {
      return listPCinemas.map((item, index) => {
        return (
          <li className="nav-item" onClick={() => this.props.handlePCinemas(item.maHeThongRap)}>
            <Link to="#" className={`nav-link  pt-3 ${index === 0 ? "active" : ""}`} data-toggle="tab">
              <img
                src={item.logo}
                alt=""
                className="img-fluid"
              />
              <span>{item.tenHeThongRap}</span>
            </Link>
          </li>
        );
      });
    }
  };
  render() {
    return <ul className="nav flex-column col-sm-3 px-0 listPCinemas">
      {this.renderListPCinames()}
    </ul>;
  }
}
const mapStateToDrops = state => {
  return {
    listPCinemas: state.movieReducer.listPCinemas
  };
};
const mapDispatchToDrop = dispatch => {
  return {
    getListPCinames: () => {
      dispatch(action.actGetListPCinemas());
    }
  };
};
export default connect(mapStateToDrops, mapDispatchToDrop) (ListPCinemas);
