export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_TOTALS = 'GET_TOTALS';
export const GET_DAILY = 'GET_DAILY';

// Partials of state
export interface ICountry {
    name: string;
}

export interface ITotals {
    confirmed: number;
    deaths: number;
    recovered: number;
    lastUpdate: Date | undefined;
}

export interface IDay {
    deaths: {
        total: number;
    };
    confirmed: {
        total: number;
    };
    reportDate: Date;
}

// Actions

export interface IFetchCountries {
    type: typeof GET_COUNTRIES;
    payload: ICountry[];
}

export interface IFetchTotals {
    type: typeof GET_TOTALS;
    payload: ITotals;
}

export interface IFetchDaily {
    type: typeof GET_DAILY;
    payload: IDay[];
}

// State
export interface IState {
    countries: ICountry[];
    totals: ITotals;
    daily: IDay[];
    isBar: boolean;
}

export type dataActions = IFetchCountries | IFetchTotals | IFetchDaily;