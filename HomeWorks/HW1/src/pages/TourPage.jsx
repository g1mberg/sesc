import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TourInfo from '../components/TourPage/TourInfo/TourInfo';
import TourPrices from '../components/TourPage/TourPrices/TourPrices';
import TourRequestForm from '../containers/TourRequestForm/TourRequestForm';
import TourPaymentInfo from '../components/TourPage/TourPaymentInfo/TourPaymentInfo';

const UNITS = ['Sesc Água Verde', 'Sesc Centro', 'Sesc da Esquina', 'Sesc Educação Infantil', 'Sesc Paço da Liberdade', 'Sesc Portão'];

function TourPage() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/tours.json')
            .then(r => r.json())
            .then(tours => {
                setTour(tours.find(t => String(t.id) === String(id)) || null);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Загрузка...</div>;
    if (!tour) return <div style={{ padding: '2rem', textAlign: 'center' }}>Тур не найден.</div>;

    return (
        <div className="lol">
            <TourInfo tour={tour} />
            <TourPrices tour={tour} />
            <TourRequestForm />
            <TourPaymentInfo />

            <div className="container">
                <p className="text-wrapper">Inscrições na unidade Sesc mais próxima de você!</p>
                <div className="buttons-list">
                    {UNITS.map(u => (
                        <div className="heading-button" key={u}>{u}</div>
                    ))}
                </div>
                <div className="footer-text">
                    <p>Consulte todas as Unidades Sesc em:</p>
                    <a href="https://www.sescpr.com.br/unidades">www.sescpr.com.br/unidades</a>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <button className="voltar-button" onClick={() => window.history.back()}>Voltar</button>
                    <div className="share">
                        <span className="share-text">Compartilhe:</span>
                        <div className="share-buttons">
                            <a href="#" className="share-item facebook">F</a>
                            <a href="#" className="share-item whatsapp">W</a>
                            <a href="#" className="share-item twitter">T</a>
                            <button className="share-item link">🔗</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourPage;
