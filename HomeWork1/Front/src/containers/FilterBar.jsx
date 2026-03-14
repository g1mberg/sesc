import { useState } from 'react';
import './FilterBar.css';
import SearchBar from '../components/TurismoPage/SearchBar/SearchBar';
import FilterSection from '../components/TurismoPage/FilterSection/FilterSection';

const today = new Date().toISOString().split('T')[0];

function FilterBar({ filters, filterDefs, updateFilter, toggleVariant, resetFilters }) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (name) => {
        setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const renderInput = (def) => {
        const value = filters[def.id];

        switch (def.type) {
            case 'daterange': {
                const dv = value || { from: '', to: '' };
                return (
                    <>
                        <label>Selecione um período</label>
                        <div className="date-range">
                            <input
                                type="date"
                                min={today}
                                value={dv.from}
                                onChange={e => updateFilter(def.id, { ...dv, from: e.target.value })}
                            />
                            <span>até</span>
                            <input
                                type="date"
                                min={dv.from || today}
                                value={dv.to}
                                onChange={e => updateFilter(def.id, { ...dv, to: e.target.value })}
                            />
                        </div>
                    </>
                );
            }
            case 'search':
                return (
                    <>
                        <input
                            type="text"
                            list={`list-${def.id}`}
                            placeholder={def.placeholder || ''}
                            value={value || ''}
                            onChange={e => updateFilter(def.id, e.target.value)}
                        />
                        <datalist id={`list-${def.id}`}>
                            {(def.options || []).map(opt => <option key={opt} value={opt} />)}
                        </datalist>
                    </>
                );
            case 'number':
                return (
                    <>
                        <input
                            type="number"
                            placeholder={def.placeholder || ''}
                            value={value || ''}
                            onChange={e => updateFilter(def.id, e.target.value.replace(/[^0-9]/g, ''))}
                        />
                        {def.suffix && ` ${def.suffix}`}
                    </>
                );
            case 'select':
                return (
                    <select
                        value={value || ''}
                        onChange={e => updateFilter(def.id, e.target.value)}
                    >
                        {(def.options || []).map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                );
            case 'variants':
                return (def.options || []).map(opt => (
                    <label key={opt}>
                        <input
                            type="checkbox"
                            checked={(value || []).includes(opt)}
                            onChange={() => toggleVariant(def.id, opt)}
                        />
                        {' '}{opt}
                    </label>
                ));
            default:
                return null;
        }
    };

    return (
        <div className="filter">
            <SearchBar value={filters.search || ''} onChange={v => updateFilter('search', v)} />

            <div className="filters">
                {filterDefs.map(def => (
                    <FilterSection
                        key={def.id}
                        title={def.label}
                        isOpen={openSections[def.id]}
                        onToggle={() => toggleSection(def.id)}
                    >
                        {renderInput(def)}
                    </FilterSection>
                ))}
            </div>

            <div className="filter-reset">
                <button type="button" onClick={resetFilters}>reset</button>
            </div>
        </div>
    );
}

export default FilterBar;
