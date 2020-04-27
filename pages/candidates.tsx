﻿import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss";
import scss from "../pageStyles/candidates.module.scss";
import Layout from "../components/Layout/layout";
import {CandidateList} from "../components/CandidateList/CandidateList";
import Link from "next/link";
import {getCandidates} from "../api/candidatesApiClient";

const Candidates: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <div className={scss.headerAndButtonContainer}>
                <h2 className={textStyle.subHeader + " " + scss.subHeaderWithLink}>Select a Candidate...</h2>
                <Link href={"/create"}><a className={scss.createButton}>+<span className={scss.desktopText}>Create Candidate</span></a></Link>
            </div>
            <hr className={textStyle.lineBreak}/>
            <CandidateList fetchCandidates={getCandidates} />
        </Layout>
    );
};

export default Candidates;