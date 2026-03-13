import { Link } from 'react-router-dom';

import './BotNav.css';
const BOT_NAV_ITEMS = ['Excursões', 'Hotéis Sesc no Brasil', 'Hotéis Cadastrados', 'Regulamento'];

function BotNav() {
    return (
        <div className="bot_nav">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading">
                        <div className="link">
                            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
                                <div className="text-wrapper">Turismo</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="list">
                    {BOT_NAV_ITEMS.map(item => (
                        <div className="item" key={item}>
                            <div className="div">
                                <div className="background"></div>
                                <div className="text-wrapper-2">{item}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BotNav;
