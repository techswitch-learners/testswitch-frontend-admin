export async function apiTryLogin(userId: string, password: string): Promise<boolean> {
    
    if (password == "") {
        alert("You did not enter a password! please enter your password.");
        return false;
    } 
    else if (userId == "") {
        alert("You did not enter a User ID! Please enter your user ID.");
        return false;
    }
    else if(await loginCredentialsIncorrect()){
        alert("Your UserID and Password did not match! Please try again.");
        return false;
    }
    else{
        return true;
    }
}

const API_URL: string = "https://testswitch-api-staging.herokuapp.com/candidates"; //TODO change to /signin when endpoint exists

async function loginCredentialsIncorrect(): Promise<boolean>{
    let response = await fetch(API_URL);
    return response.status == 200;
    
    //TODO add if(repsonse.status == 403) then not authorized, anything else is another issue.
}