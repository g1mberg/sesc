import { useState } from 'react';
import './TourRequestForm.css';

function TourRequestForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', people: '' });

    const handleFormChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Dados enviados com sucesso!');
        setForm({ name: '', email: '', phone: '', people: '' });
    };

    return (
        <div className="request">
            <div className="request-header">
                <div className="title">Excursão Confirmada</div>
                <div className="request-info">
                    <p className="subtitle">Ficou interessado nesta excursão/passeio?</p>
                    <p className="description">Deixe seus contatos para que possamos te informar quando ela for confirmada!</p>
                    <p className="important">Importante: O preenchimento destas informações não serve como reserva e não garante sua vaga. A vaga será garantida somente após a efetivação de sua inscrição em uma das Unidades Sesc Paraná.</p>
                </div>
            </div>
            <form className="request-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleFormChange} />
                <div className="form-row">
                    <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleFormChange} />
                    <input type="tel" name="phone" placeholder="Telefone" value={form.phone} onChange={handleFormChange} />
                    <input type="number" name="people" min="1" placeholder="Quantidade de Pessoas" value={form.people} onChange={handleFormChange} />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}

export default TourRequestForm;
