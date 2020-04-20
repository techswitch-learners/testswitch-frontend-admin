import {LoginForm} from "../components/LoginForm/LoginForm";
import React, {useState} from "react";
import scss from "../pageStyles/login.module.scss";
import Layout from "../components/Layout/layout";


export default function Login(): JSX.Element {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <Layout>
            <h1 className={scss.h1}>Candidate Manager</h1>
            <h2 className={scss.h2}>  Administrator Login</h2>
            <hr className={scss.hr}/>
            <LoginForm
                userId={userId}
                password={password}
                setUserId={setUserId}
                setPassword={setPassword}/>
        </Layout>
    );
}