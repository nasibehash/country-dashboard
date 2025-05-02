'use client';

import CountryChart from "@/components/CountryChart";
import React from "react";
import {useQuery} from "@tanstack/react-query";

import {Country, fetchCountries} from "@/services/getCountries";

export default function Home() {
    const {data} = useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: 1000 * 60 * 10,
    });

    const countries = data || [];

    return (
        <div className="w-full h-screen p-2">
            <h1>Welcome to the Dashboard!</h1>
            <CountryChart countries={countries} />
        </div>
    );
}
