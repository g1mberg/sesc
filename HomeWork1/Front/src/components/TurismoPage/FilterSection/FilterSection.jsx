import './FilterSection.css';

function FilterSection({ title, isOpen, onToggle, children }) {
    return (
        <div className={`filter-item${isOpen ? ' active' : ''}`}>
            <div className="filter-header" onClick={onToggle}>{title}</div>
            <div className="filter-content">{children}</div>
        </div>
    );
}

export default FilterSection;
