import React, { Component } from 'react';

class SupportFixed extends Component {
  constructor(props){
    super(props);
    this.state = {
      scroll: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    let scroll = false;
    if((window.pageYOffset > 600) && (window.pageYOffset < 3400)){
      scroll = true
    };
    this.setState({
      scroll
    })
  }
  render() {
    return (
      <div className="supportFixed" style={{opacity: `${this.state.scroll ? "1" : "0"}`}}/>
    );
  }
}

export default SupportFixed;