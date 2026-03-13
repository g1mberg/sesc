import "./BlueNav.css";

const BLUE_NAV_ITEMS = [
    'Unidades', 'Ação Social', 'Cultura', 'Educação',
    'Esporte e Lazer', 'Saúde e Alimentação', 'Turismo'
];

function BlueNav() {
    return (
        <div className="blue_nav">
            <div className="container">
                <div className="list">
                    {BLUE_NAV_ITEMS.map(item => (
                        <div className="item" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlueNav;
