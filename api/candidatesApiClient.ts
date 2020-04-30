import fetch from "node-fetch";
import getConfig from 'next/config';

export interface ListResponse<T> {
    items: T[];
    totalNumberOfItems: number;
    page: number;
    nextPage: string;
    previousPage: string;
}
export interface Candidate{
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
    }
    else
    {
        throw Error;
    }
}

export async function getCandidateById(cid:any):Promise<Candidate> {
    const apiURL=`https://testswitch-api-staging.herokuapp.com`;
    const response = await fetch(`${apiURL}/candidates`);
    if(response.ok){
        const data =  await response.json();
        const candidate = data.items.find(item=> item.id === parseInt(cid));
        return candidate;
    }
    else
    {
        throw "there was an error"
    }
}
