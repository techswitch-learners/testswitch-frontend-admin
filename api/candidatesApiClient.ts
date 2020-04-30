import fetch from "node-fetch";
import getConfig from 'next/config';

export interface ListResponse<T> {
    items: T[];
    totalNumberOfItems: number;
    page: number;
    nextPage: string;
    previousPage: string;
}

export interface Candidate {
    id: number;
    firstName: string;
    lastName: string;
    guid: string;
}

export async function getCandidates(page: number, pageSize: number): Promise<ListResponse<Candidate>> {
    const { publicRuntimeConfig } = getConfig();
    const apiURL = publicRuntimeConfig.API_URL;

    const response = await fetch(`${apiURL}/candidates?page=${page}&pageSize=${pageSize}`);
    if(response.ok){
        return await response.json();
    } else {
        throw Error;
    }
}