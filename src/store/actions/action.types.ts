export const FETCH_TOTALS = 'FETCH_TOTALS';
export const FETCH_DAILY = 'FETCH_DAILY';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRY = 'FETCH_COUNTRY';

export interface ISingleDay {
    confirmed: number;
    deaths: number;
    reportDate: Date;
}

export interface ISingleCountry {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface ITotal {
    recovered: number;
    infected: number;
    deaths: number;
    lastUpdate: Date | undefined;
    daily: ISingleDay[];
    countries: string[];
    singleCountry: ISingleCountry;
}

export interface IFetchTotals {
    type: typeof FETCH_TOTALS;
    infected: number;
    recovered: number;
    deaths: number;
    lastUpdate: Date;
}

export interface IFetchDaily {
    type: typeof FETCH_DAILY;
    payload: ISingleDay[];
}

export interface IFetchCountries {
    type: typeof FETCH_COUNTRIES,
    payload: string[];
}

export interface IFetchCountry {
    type: typeof FETCH_COUNTRY;
    payload: ISingleCountry;
}



export type totalsType = IFetchTotals | IFetchDaily | IFetchCountries | IFetchCountry;