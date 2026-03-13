import {Link} from "react-router-dom";

import './TourCard.css';
function TourCard({tour}) {
    return (
        <div className="card">
            <Link to={`/turismo/tour?id=${tour.id}`} className="no-underline">
                <img src={tour.img} alt={tour.name}/>
                <div className="card-content">
                    <h3>{tour.name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default TourCard;