export const FETCH_TOTALS = 'FETCH_TOTALS';
export const FETCH_DAILY = 'FETCH_DAILY';


export interface ISingleDay {
    confirmed: {
        total: number;
    };
    deaths: {
        total: number;
    };
    reportDate: Date;
}

export interface ITotal {
    recovered: number;
    infected: number;
    deaths: number;
    lastUpdate: Date | undefined;
    daily: ISingleDay[];
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


export type totalsType = IFetchTotals | IFetchDaily;