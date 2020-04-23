const API_URL = "https://testswitch-api-staging.herokuapp.com/candidates"; //TODO change to /signin when endpoint exists

async function checkCredentialsInApi(userId: string, password: string): Promise<number>{
    //TODO: delete test constant and return actual status code from api
    // const response = await fetch(API_URL); etc
    // const statusCode = response.status;
    
    //Check how the page works with 200, 403, and any other error code.
    return 200;
}

export async function validateCredentialsInApi(userId: string, password: string): Promise<boolean> {
    
    const statusCodeFromServer = await checkCredentialsInApi(userId, password);
    
    if(statusCodeFromServer == 403){
        alert("Those details are not in our system! Please try again");
        return false;
    }
    if(statusCodeFromServer != 200){
        alert("Something went wrong, please try again.");
        return false;
    }
    return true;
}