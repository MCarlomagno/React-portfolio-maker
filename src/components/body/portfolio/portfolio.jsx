import PortfolioItem from './portfolio-item/portfolio-item'
import './portfolio.css'
import imageUrl from './../../../assets/toolbar-image.jpg';

function Portfolio () {
    return (
            <div className="portfolio-container">
                <div className="portfolio-element"><PortfolioItem title={'title 1'} description={'description 1'} image={imageUrl}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 2'} description={'description 2'} image={imageUrl}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 3'} description={'description 3'} image={imageUrl}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 4'} description={'description 4'} image={imageUrl}/></div>
            </div>
    );
}

export default Portfolio;