const API_URL = "https://testswitch-api-staging.herokuapp.com/candidates"; //TODO change to /signin when endpoint exists

function clientSideValidation(userId: string, password: string): boolean {
    
    if (password == "") {
        alert("You did not enter a password! please enter your password.");
        return false;
    } 
    if (userId == "") {
        alert("You did not enter a User ID! Please enter your user ID.");
        return false;
    }
    return true;
}

async function tryLoginWithApi(userId: string, password: string): Promise<number>{
    //TODO: delete test constant and return actual status code from api
    // const response = await fetch(API_URL); etc
    // const statusCode = response.status;
    
    //Check how the page works with 200, 403, and any other error code.
    return 403;
}

export async function isLoginAttemptValid(userId: string, password: string): Promise<boolean> {
    
    const credentialsValidatedByClient = clientSideValidation(userId, password);
    
    if(!credentialsValidatedByClient){
        return false;
    }
    
    const statusCodeFromServer = await tryLoginWithApi(userId, password);
    
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