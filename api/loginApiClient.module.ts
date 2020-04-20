export async function apiTryLogin(userId: string, password: string): Promise<boolean> {

    //TODO placeholder function until API is wired up.
    if (password == "") {
        alert("You did not enter a password! please enter your password.");
        return false;
    } 
    else if (userId == "") {
        alert("You did not enter a User ID! Please enter your user ID.")
        return false;
    }
    //TODO
    // else if(loginCredentialsIncorrect){
    //     alert("Your UserID and Password did not match! Please try again.")
    //     return false;
    // }
    else{
        alert("user ID:" + userId + ", password: " + password);
        return true;
    }
}