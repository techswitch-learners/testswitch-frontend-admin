import React from "react";
import textStyle from "../pageStyles/text-classes.module.scss";
import Layout from "../components/Layout/layout";
import {NextPage} from "next";
import {CreateCandidateForm} from "../components/CreateCandidateForm/CreateCandidateForm";

const LoginPage: NextPage = () => {
    
    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <h2 className={textStyle.subHeader}>Create Candidate</h2>
            <hr className={textStyle.lineBreak}/>
            <CreateCandidateForm/>
        </Layout>
    );
};
export default LoginPage;