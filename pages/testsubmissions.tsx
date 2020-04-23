import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss"
import Layout from "../components/Layout/layout";
import {TestSubmissionsList} from "../components/TestSubmissionsList/TestSubmissionsList";

const TestSubmissions: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test Submissions</h1>
            <h2 className={textStyle.subHeader}>Candidate Name</h2>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Submissions</h2>
            <TestSubmissionsList/>
        </Layout>
    );
};

export default TestSubmissions;