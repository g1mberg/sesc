import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../containers/FilterBar';
import ExcursionList from '../containers/ExcursionList/ExcursionList';
import TourOffers from '../components/TurismoPage/TourOffers/TourOffers';

const EMPTY_FILTERS = { search: '', maxCost: '', originCity: '', destination: '', startDate: '', endDate: '', tags: [], sortBy: 'price' };

function TurismoPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [allTours, setAllTours] = useState([]);
    const [filterOptions, setFilterOptions] = useState({ origins: [], destinations: [], tags: [] });

    const [filters, setFilters] = useState({
        search: searchParams.get('search') || '',
        maxCost: searchParams.get('maxCost') || '',
        originCity: searchParams.get('originCity') || '',
        destination: searchParams.get('destination') || '',
        startDate: searchParams.get('startDate') || '',
        endDate: searchParams.get('endDate') || '',
        tags: searchParams.get('tags') ? searchParams.get('tags').split(',').filter(Boolean) : [],
        sortBy: searchParams.get('sortBy') || 'price',
    });

    useEffect(() => {
        fetch('/api/tours.json').then(r => r.json()).then(setAllTours);
        fetch('/api/filters.json').then(r => r.json()).then(setFilterOptions);
    }, []);

    const filteredTours = useMemo(() => {
        let result = [...allTours];

        if (filters.search) {
            const q = filters.search.toLowerCase();
            result = result.filter(t => t.name.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q));
        }
        if (filters.maxCost) {
            const max = parseFloat(filters.maxCost);
            result = result.filter(t => parseFloat(t.cost) <= max);
        }
        if (filters.originCity)
            result = result.filter(t => t.origin.toLowerCase().includes(filters.originCity.toLowerCase()));
        if (filters.destination)
            result = result.filter(t => t.destination.toLowerCase().includes(filters.destination.toLowerCase()));
        if (filters.startDate)
            result = result.filter(t => t.date >= filters.startDate);
        if (filters.endDate)
            result = result.filter(t => t.date <= filters.endDate);
        if (filters.tags.length > 0)
            result = result.filter(t => filters.tags.every(tag => t.tags.includes(tag)));

        if (filters.sortBy === 'price')
            result.sort((a, b) => parseFloat(a.cost.replace(',', '.')) - parseFloat(b.cost.replace(',', '.')));
        else if (filters.sortBy === 'date')
            result.sort((a, b) => a.date.localeCompare(b.date));

        return result;
    }, [allTours, filters]);

    const updateFilter = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => {
            if (v && (!Array.isArray(v) || v.length > 0))
                params.set(k, Array.isArray(v) ? v.join(',') : v);
        });
        setSearchParams(params);
    };

    const toggleTag = (tag) => {
        const newTags = filters.tags.includes(tag)
            ? filters.tags.filter(t => t !== tag)
            : [...filters.tags, tag];
        updateFilter('tags', newTags);
    };

    const resetFilters = () => {
        setFilters(EMPTY_FILTERS);
        setSearchParams(new URLSearchParams());
    };

    return (
        <div className="lol">
            <div className="main">
                <FilterBar
                    filters={filters}
                    filterOptions={filterOptions}
                    updateFilter={updateFilter}
                    toggleTag={toggleTag}
                    resetFilters={resetFilters}
                />
                <ExcursionList tours={filteredTours} />
            </div>
            <TourOffers tours={allTours} />
        </div>
    );
}

export default TurismoPage;
