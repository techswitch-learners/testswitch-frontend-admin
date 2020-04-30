import React from "react";
import {GetServerSideProps, NextPage} from "next";
import textStyle from "../../pageStyles/text-classes.module.scss"
import Layout from "../../components/Layout/layout";
import {TestSubmissionsList} from "../../components/TestSubmissionsList/TestSubmissionsList";
import {CandidateGuid} from "../../components/CandidateGuid/CandidateGuid";
import {Candidate, getCandidateById} from "../../api/candidatesApiClient";

interface CandidateProps {
    candidate: Candidate;
}

const TestSubmissions: NextPage<CandidateProps> = ({candidate}) => {
    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test Submissions</h1>
            <h2 className={textStyle.subHeader}>{candidate.firstName} {candidate.lastName}</h2>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Candidate Test Link</h2>
            <CandidateGuid guid={candidate.guid}/>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Submissions</h2>
            <TestSubmissionsList/>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const candidateId = context.query.testsubmissions as string;
    const candidateData = getCandidateById(parseInt(candidateId));

    return {
        props: {
            candidate: await candidateData,
        }
    }
};


export default TestSubmissions;