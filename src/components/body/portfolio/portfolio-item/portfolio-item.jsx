import './portfolio-item.css';

function PortfolioItem (props) {
    return (
        <div className='portfolio-item'>
            <img src={props.image} className="portfolio-item-image"/>
            <div className="portfolio-item-title">
                {props.title}
            </div>
            <div className="portfolio-item-description">
                {props.description} 
            </div>
        </div>
    );
}

export default PortfolioItem;