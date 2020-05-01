import {LoginForm} from "../components/LoginForm/LoginForm";
import React, {useState} from "react";
import textStyle from "../pageStyles/text-classes.module.scss";
import Layout from "../components/Layout/layout";
import {NextPage} from "next";

const LoginPage: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <h2 className={textStyle.subHeader}> Administrator Login</h2>
            <hr className={textStyle.lineBreak}/>
            <LoginForm/>
        </Layout>
    );
};

export default LoginPage;