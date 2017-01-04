import React, { Component } from 'react';

class Rating extends Component {
  // /10 We'll add logic later to determine how many stars should show
  render() {
    return (
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
}

export default Rating;
