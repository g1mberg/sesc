import './TourPrices.css';

function TourPrices({ tour }) {
    return (
        <div className="tour-prices">
            <div className="tour-prices-header">
                <h2>VALORES</h2>
            </div>
            <div className="list">
                <div className="tour-price">
                    <div className="tour-price-type">Trabalhador do Comércio</div>
                    <div className="tour-price-installment">
                        <span className="installments">{tour.people}x</span>
                        <span className="currency">R$</span>
                        <span className="amount">{tour.commercialCost}</span>
                    </div>
                    <div className="tour-price-single">ou 1x R$ {tour.forOneCommercial} /pessoa</div>
                </div>
                <div className="tour-price">
                    <div className="tour-price-type">Público em Geral</div>
                    <div className="tour-price-installment">
                        <span className="installments">{tour.people}x</span>
                        <span className="currency">R$</span>
                        <span className="amount">{tour.cost}</span>
                    </div>
                    <div className="tour-price-single">ou 1x R$ {tour.forOneRegular} /pessoa</div>
                </div>
            </div>
        </div>
    );
}

export default TourPrices;
