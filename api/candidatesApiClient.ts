export interface ListResponse<T> {
    items: T[];
    totalNumberOfItems: number;
    page: number;
    nextPage: string;
    previousPage: string;
}
export interface Candidate{
    id:number;
    firstName:string;
    lastName:string;
    guid:string;
}

export async function getCandidates(): Promise<ListResponse<Candidate>> {
    const apiUrl=process.env.REACT_APP_API_URL;
    const response = await fetch(`${apiUrl}/candidates`);
    
    if(response.status==200){
        return await response.json();
    }
    else
    {
        throw Error;
    }
}