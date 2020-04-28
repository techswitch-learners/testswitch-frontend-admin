import React from "react";
import {GetServerSideProps, NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss";
import scss from "../pageStyles/candidates.module.scss";
import Layout from "../components/Layout/layout";
import {CandidateList} from "../components/CandidateList/CandidateList";
import Link from "next/link";
import {Candidate, getCandidates, ListResponse} from "../api/candidatesApiClient";

interface CandidatesProps {
    fetchCandidates: ListResponse<Candidate>;
}
const Candidates: NextPage<CandidatesProps> = ({fetchCandidates}) => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <div className={scss.headerAndButtonContainer}>
                <h2 className={textStyle.subHeader + " " + scss.subHeaderWithLink}>Select a Candidate...</h2>
                <Link href={"/create"}><a className={scss.createButton}>+<span className={scss.desktopText}>Create Candidate</span></a></Link>
            </div>
            <hr className={textStyle.lineBreak}/>
            <CandidateList fetchCandidates={fetchCandidates}/>
        </Layout>
    );
};
export const getServerSideProps: GetServerSideProps = async context => {
    const fetchCandidates = getCandidates();

    return {
        props: {
            fetchCandidates: await fetchCandidates,
        }
    }
};

export default Candidates;

