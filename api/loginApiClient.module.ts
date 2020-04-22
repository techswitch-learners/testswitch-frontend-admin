export async function apiTryLogin(userId: string, password: string): Promise<boolean> {

    //TODO placeholder function until API is wired up.
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
        alert("user ID:" + userId + ", password: " + password);
        return true;
    }
}

const API_URL: string = "https://localhost:5001/weatherforecast";

async function loginCredentialsIncorrect(): Promise<boolean>{
    let response = await fetch(API_URL);
    return response.status != 200;
}