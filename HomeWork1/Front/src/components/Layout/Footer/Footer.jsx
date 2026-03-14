import "./Footer.css";
function Footer() {
    return (
        <footer className="bottom">
            <div className="info">
                <div className="content">
                    <div className="info-top">
                        <div className="left">
                            <div className="choose-city">Selecione uma cidade</div>
                            <div className="socials">
                                <div className="facebook">&#xf09a;</div>
                                <div className="instagram">&#xf16d;</div>
                                <div className="youtube">&#xf167;</div>
                                <div className="twitter">&#xf099;</div>
                            </div>
                            <div className="markets">
                                <div className="google-play">&#xf3ab; Google Play</div>
                                <div className="app-store">&#xf179; App Store</div>
                            </div>
                            <div className="defender"></div>
                        </div>
                        <div className="right">
                            <div>Unidades</div>
                            <div>Programação</div>
                            <div>Cursos</div>
                            <div>Turismo</div>
                            <div>Serviços</div>
                            <div>Notícias</div>
                            <div>Fale Conosco</div>
                            <div>Ouvidoria</div>
                            <div>Acesso à informação</div>
                            <div>Editais</div>
                            <div>Bolsas Gratuitas</div>
                            <div>Credencial Sesc</div>
                            <div>Licitações</div>
                            <div>Página Inicial</div>
                            <div>Sobre o Sesc</div>
                            <div>Trabalhe Conosco</div>
                            <div>Política de privacidade</div>
                            <div>Direitos e deveres</div>
                            <div>Transparência e Prestação de Contas</div>
                        </div>
                    </div>
                    <div className="bottom">
                        Entre em contato с Sesc: 41 3304-2266 - 2ª a 6ª, das 8h às 18h
                    </div>
                </div>
            </div>

            <div className="commercials">
                <p className="title">
                    Serviço Social do Comércio - Sesc<br/>
                    <span className="subtitle">Departamento Regional no Paraná</span>
                </p>
                <p className="address">Rua Visconde do Rio Branco, 931 - CEP 80.410-001 - Curitiba - PR</p>
                <img className="separator" src="img/margin.svg" alt=""/>
            </div>

        </footer>
    )
}

export default Footer;