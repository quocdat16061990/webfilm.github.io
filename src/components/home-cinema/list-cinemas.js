import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "./../../redux/action/index";

class ListCinemas extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      idPCinema: this.props.idPCinema,
    }
  }
  renderListCinemas = () => {
    let { listCinemas } = this.props;
    if (listCinemas) {
      return listCinemas.map((item, index) => {
        return(
          <li className="nav-item" key={index} onClick={() => this.props.handleCinemas(item.maCumRap)}>
            <div
              className={`nav-link ${index===0 ? "active" : ""} d-flex`}
              data-toggle="tab"
            >
              <img
                src={this.props.logo}
                alt=""
                className="img-fluid"
              />
              <div className="wrapInfo">
                <p>
                  <span>{item.tenCumRap.slice(0, item.tenCumRap.indexOf("-"))}</span>- {item.tenCumRap.slice(item.tenCumRap.indexOf("-") + 1, item.tenCumRap.length)}
                    </p>
                <p>{item.diaChi}</p>
                <Link to="">[chi tiết]</Link>
              </div>
            </div>
          </li>
        )
      })
    }
  }
  componentDidMount() {
    this.props.getListCinames(this.props.idPCinema);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.idPCinema !== this.state.idPCinema){
      this.setState({
        idPCinema: nextProps.idPCinema,
      },() => this.props.getListCinames(this.state.idPCinema))
    }
  }
  render() {
    return (
      <div className="col-md-5 col-lg-4" style={{ height: 705, overflowX: "hidden", overflowY: "auto" }}>
        <ul className="nav flex-column  listCinemas" >
        {this.renderListCinemas()}
      </ul>
      </div>

    );
  }
}
const mapStateToDrops = state => {
  return {
    listCinemas: state.movieReducer.listCinemas
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListCinames: idPCinema => {
      dispatch(action.actGetListCinemas(idPCinema))
    }
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops)(ListCinemas);