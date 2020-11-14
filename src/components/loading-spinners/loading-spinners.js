import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { HashLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from 'react-spinners/ClipLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 14% auto;
    border-color: #36D7B7;
`;

class LoadingSpinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <HashLoader
          css={override}
          sizeUnit={"px"}
          size={60}
          color={'#36D7B7'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
export default LoadingSpinners;