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
    const response = await fetch(`https://testswitch-api-staging.herokuapp.com/candidates`);    
    if(response.status==200){
        return await response.json();
    }
    else
    {
        throw Error;
    }
}