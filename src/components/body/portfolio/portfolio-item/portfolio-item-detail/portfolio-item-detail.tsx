import React, { Component, useState } from "react";
import './pop-up.css';

interface IPortfolioItemDetailProps {
  text?: string;
  closePopup?: any;
}

interface IPortfolioItemState {
}

class PortfolioItemDetail extends Component<IPortfolioItemDetailProps, IPortfolioItemState> {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

export default PortfolioItemDetail;