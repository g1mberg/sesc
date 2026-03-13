import "./MidNav.css";

function MidNav() {
    return (
        <div className="mid_nav">
            <div className="container">
                <div className="left">
                    <img className="link" src="/img/logo-sesc.svg" alt="Sesc" />
                    <div className="divider">|</div>
                    <div className="location">Paraná</div>
                </div>
                <div className="right">
                    <div className="search">
                        <div className="txt">Procurar no Sesc Paraná</div>
                        <img src="/img/search.svg" alt="search" />
                    </div>
                    <div className="select-city">
                        <span>Selecione uma cidade</span>
                        <img src="/img/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidNav;
