import './SearchBar.css';

function SearchBar({ value, onChange }) {
    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Digite algo para buscar..."
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
