import './portfolio-item.css';
import React, { Component } from 'react';

interface IPortfolioItemProps {
    title?: string;
    image?: string;
    description?: string;
  }
  
  interface IPortfolioItemState {
  }


class PortfolioItem extends Component<IPortfolioItemProps, IPortfolioItemState> {

    render() {
        return (
            <div className='portfolio-item'>
                <img src={this.props.image} className="portfolio-item-image"/>
                <div className="portfolio-item-title">
                    {this.props.title}
                </div>
                <div className="portfolio-item-description">
                    {this.props.description} 
                </div>
            </div>
        );
    }
}

export default PortfolioItem;