import './portfolio-item.css';
import React, { Component } from 'react';
import PortfolioItemDetail from './portfolio-item-detail/portfolio-item-detail';

interface IPortfolioItemProps {
    title?: string;
    image?: string;
    description?: string;
  }
  
  interface IPortfolioItemState {
    showPopup?: boolean;
  }


class PortfolioItem extends Component<IPortfolioItemProps, IPortfolioItemState> {

    constructor(props: any) {
        super(props);
        this.state = {
          showPopup: false  
        };
      }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render() {
        return (
            <div className='portfolio-item' onClick={this.togglePopup.bind(this)}>
                <img src={this.props.image} className="portfolio-item-image"/>
                <div className="portfolio-item-title">
                    {this.props.title}
                </div>
                <div className="portfolio-item-description">
                    {this.props.description} 
                </div>
                {this.state.showPopup ? 
                    <PortfolioItemDetail
                        text='Close'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                    }
            </div>
        );
    }
}

export default PortfolioItem;