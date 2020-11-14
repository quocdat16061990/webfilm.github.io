import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import UserByType from "./item-dashboard/user-by-type";
import Movie from "./item-dashboard/movie";
class DashboardPaginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      elements: [],
      perPage: 10,
      currentPage: 0,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.listDashboard !== prevProps.listDashboard) {
      this.setState({
        data: this.props.listDashboard,
        pageCount: Math.ceil(this.props.listDashboard.length / this.state.perPage)
      }, () => this.setElementsForCurrentPage());
    }
  }
  setElementsForCurrentPage() {
    let elements = this.state.data
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((item, index) => {
        if (this.props.typeChoose === "Phim") {
          return <Movie key={index} movie={item} index={index + this.state.currentPage * 10}  handleMovie={this.props.handleMovie} handleTypeMovieModal={this.props.handleTypeMovieModal} />
        } else {
          return <UserByType
            user={item}
            key={index}
            index={index + this.state.currentPage * 10}
            handleUser={this.props.handleUser}
            handleTypeUserModal={this.props.handleTypeUserModal}
          />
        }
      });
    this.setState({ elements: elements });
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.typeChoose !== this.props.typeChoose){
      this.setState({
        currentPage: 0,
        offset: 0
      })
    }
  }
  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  }
  render() {
    let paginationElement;
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={<span className="gap">...</span>}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}
          forcePage={this.state.currentPage}
          containerClassName={"pagination mt-3 justify-content-end w-150"}
          pageLinkClassName={"paganate-text mx-2 text-decoration-none"}
          pageClassName={"pointer"}
          previousLinkClassName={"previous_page paganate-text mx-2 text-decoration-none pointer"}
          nextLinkClassName={"next_page mx-2 text-decoration-none pointer paganate-text"}
          disabledClassName={"disabled"}
          activeClassName={"active removeOutline"}
          activeLinkClassName={"removeOutline paganate-active paganate-active"}
        />
      );
    }
    return (
      <Fragment>
        {/* {paginationElement} */}
        {this.state.elements}
        {paginationElement}
      </Fragment>
    );
  }
}

export default DashboardPaginate;