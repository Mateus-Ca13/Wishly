'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';
import { createCountryStore, type CountryState, type CountryStore } from '@/stores/countryStore';

const CountryStoreContext = createContext<CountryStore | null>(null);

interface CountryStoreProviderProps {
    children: ReactNode;
    country: string;
}

export function CountryStoreProvider({ children, country }: CountryStoreProviderProps) {
    const storeRef = useRef<CountryStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = createCountryStore(country);
    }

    return (
        <CountryStoreContext.Provider value={storeRef.current}>
            {children}
        </CountryStoreContext.Provider>
    );
}

export function useCountryStore<T>(selector: (state: CountryState) => T): T {
    const store = useContext(CountryStoreContext);
    if (!store) {
        throw new Error('useCountryStore must be used inside a CountryStoreProvider');
    }
    return useStore(store, selector);
}

// Convenience hooks
export function useCountry() {
    return useCountryStore((state) => state.country);
}

export function useCurrency() {
    return useCountryStore((state) => state.currency);
}
