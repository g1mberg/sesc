import './TourOffers.css';
import TourCard from '../TourCard/TourCard';
import TourLinks from '../TourLinks/TourLinks';

function TourOffers({ tours }) {
    return (
        <div className="offers">
            <div className="head">
                <h2>Destaques</h2>
            </div>
            <div className="content">
                <div className="body">
                    <div className="cards">
                        {tours.slice(0, 3).map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                </div>
                <TourLinks />
            </div>
        </div>
    );
}

export default TourOffers;
