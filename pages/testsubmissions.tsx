﻿
import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss";
import Layout from "../components/Layout/layout";
import {TestSubmissionsList} from "../components/TestSubmissionsList/TestSubmissionsList";
import {CandidateGuid} from "../components/CandidateGuid/CandidateGuid";
import {useRouter} from 'next/router';

const TestSubmissions: NextPage = () => {
    //get the candidate guid from the router query object
    const router = useRouter();
    console.log(router.query);
    const candidateName = router.query.name;
    const candidateGuid = router.query.token;

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test Submissions</h1>
            <h2 className={textStyle.subHeader}>{candidateName}</h2>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Candidate Test Link</h2>
            <CandidateGuid guid={candidateGuid}/>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Submissions</h2>
            <TestSubmissionsList/>
        </Layout>
    );
};


export default TestSubmissions;