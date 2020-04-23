import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss"
import Layout from "../components/Layout/layout";


const TestSubmissions: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test<br/>Submissions</h1>
            <h2 className={textStyle.subHeader}> Select a Candidate...</h2>
            <hr className={textStyle.lineBreak}/>
            
        </Layout>
    );
};

export default TestSubmissions;