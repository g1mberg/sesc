import "./TopNav.css";

function TopNav({ onLoginClick }) {
    const navItems = [
        'Sobre o Sesc', 'Credencial Sesc', 'Licitações', 'Fornecedores',
        'Editais', 'Fale Conosco', 'Trabalhe Conosco', 'Transparência e Prestação de Contas'
    ];

    return (
        <div className="nav">
            <div className="container">
                <div className="div">
                    <div className="list">
                        {navItems.map(item => (
                            <div className="item" key={item}>{item}</div>
                        ))}
                    </div>
                    <div className="item" onClick={onLoginClick} style={{ cursor: 'pointer' }}>
                        <img src="/img/profile.svg" alt="profile" />
                        <p>Meu Sesc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
