"use client"

import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {Country, fetchCountries} from '@/services/getCountries';
import Pagination from "@/components/Pagination";
import Image from "next/image";


const Page = () => {
    const {data, isLoading, error} = useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: 1000 * 60 * 10,
    });

    const countries = data || [];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching countries.</p>;

    return (
        <main className="w-full p-4">
            <>
                <h1 className="text-2xl font-bold mb-4"> Countries Page</h1>
                {/*Search Area*/}
                <div className="w-full mb-4">
                    <input
                        type="text"
                        placeholder="Search countries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/*Table Area*/}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2 border">Flag</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Capital</th>
                            <th className="p-2 border">Population</th>
                            <th className="p-2 border">Area (km²)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {paginatedCountries.map((country) => (
                            <tr key={country.name.common} className="hover:bg-gray-50">
                                <td className="p-2 border">
                                    <Image src={country.flags.png} alt="flag"   width={60}
                                           height={60} className="w-8 h-5 object-cover"/>
                                </td>
                                <td className="p-2 border">{country.name.common}</td>
                                <td className="p-2 border">{country.capital?.[0] || '-'}</td>
                                <td className="p-2 border">{country.population.toLocaleString()}</td>
                                <td className="p-2 border">{country.area.toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/*Pagination Area*/}
                <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </>

        </main>
    );
};

export default Page;
