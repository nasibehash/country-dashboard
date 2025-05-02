'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Country } from '@/services/getCountries';
import { useState } from 'react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
    countries: Country[];
}

const CountryChart = ({ countries }: Props) => {
    const [metric, setMetric] = useState<'population' | 'area'>('population');

    const topCountries = [...countries]
        .sort((a, b) => (metric === 'population' ? b.population - a.population : b.area - a.area))
        .slice(0, 10);

    const data = {
        labels: topCountries.map((c) => c.name.common),
        datasets: [
            {
                label: metric === 'population' ? 'Population' : 'Area (km²)',
                data: topCountries.map((c) => (metric === 'population' ? c.population : c.area)),
                backgroundColor: 'rgba(59,130,246,0.7)',
                width: '100%',
                height:'100%',
            },
        ],
    };

    return (
        <div className="my-10">
            <div className="mb-4 flex gap-2 items-center">
                <label className="font-medium">Metric:</label>
                <select
                    value={metric}
                    onChange={(e) => setMetric(e.target.value as 'population' | 'area')}
                    className="p-2 border rounded"
                >
                    <option value="population">Population</option>
                    <option value="area">Area</option>
                </select>
            </div>
            <Bar data={data} />
        </div>
    );
};

export default CountryChart;
