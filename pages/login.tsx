import {LoginForm} from "../components/LoginForm/LoginForm";
import React, {useState} from "react";
import textStyle from "../pageStyles/text-classes.module.scss";
import Layout from "../components/Layout/layout";
import {NextPage} from "next";

const LoginPage: NextPage = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <h2 className={textStyle.subHeader}> Administrator Login</h2>
            <hr className={textStyle.lineBreak}/>
            <LoginForm
                userId={userId}
                password={password}
                setUserId={setUserId}
                setPassword={setPassword}/>
        </Layout>
    );
};
export default LoginPage;
