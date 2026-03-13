import './TourPaymentInfo.css';

function TourPaymentInfo() {
    return (
        <div className="payment-section">
            <h3 className="title">Forma de Pagamento</h3>
            <p className="text">Parcelamento em até 12 vezes, sem juros, nos cartões Visa, Redeshop, Maestro, Mastercard, Diners, American Express, Elo. Parcela mínima de R$ 50,00 (cinquenta reais).</p>
            <hr className="separator" />
            <h3 className="title">Procedimentos para Inscrições</h3>
            <p className="text">As vagas são disponibilizadas preferencialmente aos trabalhadores do comércio de bens, serviços e turismo, empresários e seus dependentes; Público em geral poderá se inscrever também havendo vagas.</p>
            <p className="text">As pré-reservas terão validade máxima de 02 dias para pagamento.</p>
            <h4 className="subtitle">Para o pagamento apresentar documentos:</h4>
            <ul className="document-list">
                <li>Adultos: RG – Carteira de Identidade</li>
                <li>Crianças até 11 anos: Certidão de Nascimento</li>
                <li>Crianças a partir de 12 anos: RG – Carteira de Identidade</li>
                <li>CPF</li>
                <li>Credencial Sesc atualizada (carteirinha)</li>
            </ul>
        </div>
    );
}

export default TourPaymentInfo;
