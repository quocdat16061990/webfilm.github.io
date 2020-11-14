import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../redux/action/index";
class ListPCinemas extends Component {
  renderListPCinames = () => {
    let { listPCinemas } = this.props;
    if (listPCinemas) {
      return listPCinemas.map((item, index) => {
        return (
          <li className={`nav-item ${index === 0 ? "pt-3" : ""}`} key={index} onClick={() => this.props.handlePCinemas(item.maHeThongRap, item.logo)}>
            <Link className={`nav-link  ${index === 0 ? "active" : ""}`} to="#" data-toggle="tab">
              <img
                src={item.logo}
                alt=""
                className="img-fluid ImgPCinames"
              />
            </Link>
          </li>
        )
      })
    }

  }
  componentDidMount() {
    this.props.getListPCinames();
  }
  render() {
    return (
      <ul className="nav flex-column col-md-1 p-2 listPCinemas">
        {this.renderListPCinames()}
      </ul>
    );
  }
}
const mapStateToDrops = state => {
  return {
    listPCinemas: state.movieReducer.listPCinemas
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListPCinames: () => {
      dispatch(action.actGetListPCinemas());
    }
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops)(ListPCinemas);