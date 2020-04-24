export async function getCandidates(): Promise<string[]> {
    
    //get json candidates from site
    
    //get names from candidates
    
    //put into list
    
    return ["Michael Walker", "Stephen Jackson"];
}

const CREATE_CANDIDATE_API_URL = "https://testswitch-api-staging.herokuapp.com/candidates/create"; 

export async function tryCreateApi(userId: string, password: string, email: string): Promise<number>{
    //TODO: delete test constant and return actual status code from api
    // const response = await fetch(API_URL); etc
    // const statusCode = response.status;

    //Check how the page works with 200, 403, and any other error code.
    return 200;
}