import {LoginForm} from "../components/LoginForm";
import React, {useState} from "react";
import scss from "../pageStyles/index.module.scss"


export default function Login(): JSX.Element {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <h1 className={scss.example}>Candidate Manager</h1>
            <h2>Administrator Login</h2>
            <hr/>
            <LoginForm
                userId={userId}
                password={password}
                setUserId={setUserId}
                setPassword={setPassword}/>
        </div>
    );
}