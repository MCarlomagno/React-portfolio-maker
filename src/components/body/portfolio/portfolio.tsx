import React from 'react';
import './portfolio.css';
import PortfolioItem from './portfolio-item/portfolio-item';
import imageUrl from './../../../assets/toolbar-image.jpg';


class Portfolio extends React.Component {
    render() {
        const fakeDescription = 'Lorem  asdasd ipsum asdasd asd asd asd asd asdas dasd as das d asd asd asdna asdf adf asdfasf asdfas dfas d asdfa sdfa sdf adsf dolor sit amet consectetur, adipisicing elit. Delectus numquam maiores iure labore ad, blanditiis tempore quod sunt? Distinctio eum repudiandae esse culpa praesentium voluptatibus odit perspiciatis! Iusto maxime ex vitae numquam eos ratione tempora quis fugit nulla, rerum quisquam atque, quo provident inventore recusandae modi ipsam, facilis quas explicabo?';
        const fakeTitle1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt?'
        return (
                <div className="portfolio-container">
                    <div className="portfolio-element"><PortfolioItem title={fakeTitle1} description={fakeDescription} image={imageUrl}/></div>
                    <div className="portfolio-element"><PortfolioItem title={fakeTitle1} description={fakeDescription} image={imageUrl}/></div>
                    <div className="portfolio-element"><PortfolioItem title={'title 3'} description={fakeDescription} image={imageUrl}/></div>
                    <div className="portfolio-element"><PortfolioItem title={'title 4'} description={fakeDescription} image={imageUrl}/></div>
                </div>
        );
    }
}

export default Portfolio;