export interface Country {
    name: { common: string };
    capital?: string[];
    population: number;
    area: number;
    flags: { png: string };
}

export const fetchCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};
