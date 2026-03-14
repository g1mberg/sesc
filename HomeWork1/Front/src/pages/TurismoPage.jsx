import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../containers/FilterBar';
import ExcursionList from '../containers/ExcursionList/ExcursionList';
import TourOffers from '../components/TurismoPage/TourOffers/TourOffers';

function buildEmptyFilters(filterDefs) {
    const empty = { search: '' };
    for (const def of filterDefs) {
        if (def.type === 'daterange') empty[def.id] = { from: '', to: '' };
        else if (def.type === 'variants') empty[def.id] = [];
        else if (def.type === 'select') empty[def.id] = def.options?.[0]?.value || '';
        else empty[def.id] = '';
    }
    return empty;
}

function initFiltersFromURL(filterDefs, searchParams) {
    const filters = { search: searchParams.get('search') || '' };
    for (const def of filterDefs) {
        if (def.type === 'daterange') {
            filters[def.id] = {
                from: searchParams.get(`${def.id}From`) || '',
                to: searchParams.get(`${def.id}To`) || '',
            };
        } else if (def.type === 'variants') {
            const raw = searchParams.get(def.id);
            filters[def.id] = raw ? raw.split(',').filter(Boolean) : [];
        } else if (def.type === 'select') {
            filters[def.id] = searchParams.get(def.id) || def.options?.[0]?.value || '';
        } else {
            filters[def.id] = searchParams.get(def.id) || '';
        }
    }
    return filters;
}

function TurismoPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [allTours, setAllTours] = useState([]);
    const [filterDefs, setFilterDefs] = useState([]);
    const [filters, setFilters] = useState({ search: searchParams.get('search') || '' });
    const initialized = useRef(false);

    useEffect(() => {
        fetch('/api/tours.json').then(r => r.json()).then(setAllTours);
        fetch('/api/filters.json').then(r => r.json()).then(data => {
            setFilterDefs(data);
            if (!initialized.current) {
                initialized.current = true;
                setFilters(initFiltersFromURL(data, searchParams));
            }
        });
    }, []);

    const emptyFilters = useMemo(() => buildEmptyFilters(filterDefs), [filterDefs]);

    const filteredTours = useMemo(() => {
        if (!filterDefs.length) return allTours;
        let result = [...allTours];

        if (filters.search) {
            const q = filters.search.toLowerCase();
            result = result.filter(t =>
                t.name.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q)
            );
        }

        for (const def of filterDefs) {
            if (!def.tourField) continue;
            const value = filters[def.id];
            if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) continue;

            if (def.type === 'daterange') {
                if (value.from) result = result.filter(t => t[def.tourField] >= value.from);
                if (value.to) result = result.filter(t => t[def.tourField] <= value.to);
            } else if (def.type === 'search') {
                result = result.filter(t =>
                    String(t[def.tourField] || '').toLowerCase().includes(value.toLowerCase())
                );
            } else if (def.type === 'number') {
                const max = parseFloat(value);
                if (!isNaN(max)) {
                    result = result.filter(t => {
                        const raw = String(t[def.tourField] || '0').replace(/\./g, '').replace(',', '.');
                        return parseFloat(raw) <= max;
                    });
                }
            } else if (def.type === 'variants') {
                result = result.filter(t =>
                    value.every(v => (t[def.tourField] || []).includes(v))
                );
            }
        }

        const sortVal = filters.sortBy;
        if (sortVal === 'price') {
            const toNum = s => parseFloat(String(s).replace(/\./g, '').replace(',', '.'));
            result.sort((a, b) => toNum(a.cost) - toNum(b.cost));
        } else if (sortVal === 'date') {
            result.sort((a, b) => a.date.localeCompare(b.date));
        }

        return result;
    }, [allTours, filters, filterDefs]);

    const updateFilter = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => {
            if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
                if (v.from) params.set(`${k}From`, v.from);
                if (v.to) params.set(`${k}To`, v.to);
            } else if (Array.isArray(v) && v.length > 0) {
                params.set(k, v.join(','));
            } else if (v) {
                params.set(k, v);
            }
        });
        setSearchParams(params);
    };

    const toggleVariant = (filterId, value) => {
        const current = filters[filterId] || [];
        const newValues = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        updateFilter(filterId, newValues);
    };

    const resetFilters = () => {
        setFilters(emptyFilters);
        setSearchParams(new URLSearchParams());
    };

    return (
        <div className="lol">
            <div className="main">
                <FilterBar
                    filters={filters}
                    filterDefs={filterDefs}
                    updateFilter={updateFilter}
                    toggleVariant={toggleVariant}
                    resetFilters={resetFilters}
                />
                <ExcursionList tours={filteredTours} />
            </div>
            <TourOffers tours={allTours} />
        </div>
    );
}

export default TurismoPage;
