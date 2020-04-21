import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss"
import Layout from "../components/Layout/layout";
import {CandidateList} from "../components/CandidateList/CandidateList";

const Candidates: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <h2 className={textStyle.subHeader}> Select a Candidate...</h2>
            <hr className={textStyle.lineBreak}/>
            <CandidateList/>
        </Layout>
    );
};

export default Candidates;