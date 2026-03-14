import TourCard from '../../components/TurismoPage/TourCard/TourCard';
import './ExcursionList.css';

function ExcursionList({ tours }) {
    return (
        <div className="excursions">
            <div className="head">
                <p>Excursões e passeios</p>
                <p><strong>{tours.length}</strong> excursões encontradas.</p>
            </div>

            <ul className="cards">
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </ul>

            <div className="see-more">
                <div className="separator"></div>
                <div className="link-wrapper">
                    <div className="link">
                        <div className="text-wrapper">Veja Mais</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExcursionList;
