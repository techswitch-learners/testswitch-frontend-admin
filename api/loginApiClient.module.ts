const API_URL = "https://testswitch-api-staging.herokuapp.com/candidates"; //TODO change to /signin when endpoint exists

export async function tryLoginApi(userId: string, password: string): Promise<number>{
    //TODO: delete test constant and return actual status code from api
    // const response = await fetch(API_URL); etc
    // const statusCode = response.status;
    
    //Check how the page works with 200, 403, and any other error code.
    return 200;
}