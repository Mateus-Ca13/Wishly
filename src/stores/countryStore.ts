import { createStore } from 'zustand';
import { getCurrencyByCountry } from '@/utils/geo';

export interface CountryState {
    country: string;
    currency: string;
}

export const createCountryStore = (country: string) => {
    return createStore<CountryState>()(() => ({
        country,
        currency: getCurrencyByCountry(country),
    }));
};

export type CountryStore = ReturnType<typeof createCountryStore>;
