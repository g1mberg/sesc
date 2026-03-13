import { useState } from 'react';
import './FilterBar.css';
import SearchBar from '../components/TurismoPage/SearchBar/SearchBar';
import FilterSection from '../components/TurismoPage/FilterSection/FilterSection';

const today = new Date().toISOString().split('T')[0];

function FilterBar({ filters, filterOptions, updateFilter, toggleTag, resetFilters }) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (name) => {
        setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="filter">
            <SearchBar value={filters.search} onChange={v => updateFilter('search', v)} />

            <div className="filters">
                <FilterSection title="Datas" isOpen={openSections.datas} onToggle={() => toggleSection('datas')}>
                    <label>Selecione um período</label>
                    <div className="date-range">
                        <input
                            type="date"
                            min={today}
                            value={filters.startDate}
                            onChange={e => updateFilter('startDate', e.target.value)}
                        />
                        <span>até</span>
                        <input
                            type="date"
                            min={filters.startDate || today}
                            value={filters.endDate}
                            onChange={e => updateFilter('endDate', e.target.value)}
                        />
                    </div>
                </FilterSection>

                <FilterSection title="Cidade de origem" isOpen={openSections.origin} onToggle={() => toggleSection('origin')}>
                    <input
                        type="text"
                        list="origin-cities"
                        placeholder="Digite a cidade..."
                        value={filters.originCity}
                        onChange={e => updateFilter('originCity', e.target.value)}
                    />
                    <datalist id="origin-cities">
                        {filterOptions.origins.map(city => (
                            <option key={city} value={city} />
                        ))}
                    </datalist>
                </FilterSection>

                <FilterSection title="Valor máximo" isOpen={openSections.cost} onToggle={() => toggleSection('cost')}>
                    <input
                        type="number"
                        placeholder="Ex: 500"
                        value={filters.maxCost}
                        onChange={e => updateFilter('maxCost', e.target.value.replace(/[^0-9]/g, ''))}
                    />
                    {' '}R$
                </FilterSection>

                <FilterSection title="Ordenar por" isOpen={openSections.sort} onToggle={() => toggleSection('sort')}>
                    <select
                        value={filters.sortBy}
                        onChange={e => updateFilter('sortBy', e.target.value)}
                    >
                        <option value="price">Preço</option>
                        <option value="date">Data</option>
                    </select>
                </FilterSection>

                <FilterSection title="Tipo de Excursão" isOpen={openSections.tipo} onToggle={() => toggleSection('tipo')}>
                    {filterOptions.tags.map(tag => (
                        <label key={tag}>
                            <input
                                type="checkbox"
                                checked={filters.tags.includes(tag)}
                                onChange={() => toggleTag(tag)}
                            />
                            {' '}{tag}
                        </label>
                    ))}
                </FilterSection>

                <FilterSection title="Destino" isOpen={openSections.dest} onToggle={() => toggleSection('dest')}>
                    <input
                        type="text"
                        list="destinations"
                        placeholder="Digite o destino..."
                        value={filters.destination}
                        onChange={e => updateFilter('destination', e.target.value)}
                    />
                    <datalist id="destinations">
                        {filterOptions.destinations.map(city => (
                            <option key={city} value={city} />
                        ))}
                    </datalist>
                </FilterSection>
            </div>

            <div className="filter-reset">
                <button type="button" onClick={resetFilters}>reset</button>
            </div>
        </div>
    );
}

export default FilterBar;
