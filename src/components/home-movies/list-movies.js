import React, { Component, Fragment } from 'react';
import Movie from "./movie";
class ListMovies extends Component {
  showMovies = () => {
    let { listChildMovies } = this.props;
    if(listChildMovies){
      return listChildMovies.map((item, index) => {
        return <Movie movie={item} key={index} handleSrcModalMovie={this.props.handleSrcModalMovie} />
      })
    }
  }
  render() {
    return (
      <Fragment>
        {this.showMovies()}
      </Fragment>


    );
  }
}
export default ListMovies;