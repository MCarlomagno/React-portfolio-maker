import PortfolioItem from './portfolio-item/portfolio-item'
import './portfolio.css'

function Portfolio () {
    return (
            <div className="portfolio-container">
                <div className="portfolio-element"><PortfolioItem title={'title 1'}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 2'}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 3'}/></div>
                <div className="portfolio-element"><PortfolioItem title={'title 4'}/></div>
            </div>
    );
}

export default Portfolio;