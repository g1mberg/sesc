import './TourInfo.css';

function TourInfo({ tour }) {
    return (
        <div className="tour">
            <div className="tour-content">
                <div className="tour-image">
                    <img src={tour.img} alt={tour.name} />
                    <span className="badge">{tour.status}</span>
                </div>
                <div className="tour-text">
                    <div className="tour-header">
                        <h2 className="title">{tour.name}</h2>
                        <div className="tags">
                            {tour.searilezedTags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className="date-info">
                            <span className="date">
                                {new Date(tour.date + 'T00:00:00').toLocaleDateString('pt-BR', {
                                    day: 'numeric', month: 'long', year: 'numeric'
                                })}
                            </span>
                            <span className="departure">Saída de {tour.origin}</span>
                        </div>
                    </div>
                    <div className="tour-body">
                        <p>{tour.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourInfo;
