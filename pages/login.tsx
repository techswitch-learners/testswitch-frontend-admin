import {LoginForm} from "../components/LoginForm/LoginForm";
import React, {useState} from "react";
import scss from "../pageStyles/login.module.scss";
import Layout from "../components/Layout/layout";
import {NextPage} from "next";

const LoginPage: NextPage = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout>
            <h1 className={scss.pageHeader}>Candidate Manager</h1>
            <h2 className={scss.subHeader}> Administrator Login</h2>
            <hr className={scss.lineBreak}/>
            <LoginForm
                userId={userId}
                password={password}
                setUserId={setUserId}
                setPassword={setPassword}/>
        </Layout>
    );
};
export default LoginPage;
