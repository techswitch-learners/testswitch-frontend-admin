import React from "react";
import {GetServerSideProps, NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss"
import Layout from "../components/Layout/layout";
import {TestSubmissionsList} from "../components/TestSubmissionsList/TestSubmissionsList";
import {CandidateGuid} from "../components/CandidateGuid/CandidateGuid";
import {Candidate, getCandidates, ListResponse} from "../api/candidatesApiClient";

interface CandidatesProps {
    candidatesList: ListResponse<Candidate>;
}

const TestSubmissions: NextPage<CandidatesProps> = ({candidatesList}) => {
    //TODO: link Candidate Name header to API, to generate candidate name
    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test Submissions</h1>
            <h2 className={textStyle.subHeader}>Candidate Name</h2>
            <hr className={textStyle.lineBreak}/>
            <CandidateGuid guid={candidatesList.items[0].guid}/>
            <h2 className={textStyle.subHeader}>Submissions</h2>
            <TestSubmissionsList/>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const candidatesList = getCandidates();

    return {
        props: {
            candidatesList: await candidatesList,
        }
    }
};


export default TestSubmissions;