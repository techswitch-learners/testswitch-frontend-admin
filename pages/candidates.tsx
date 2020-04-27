import React from "react";
import {NextPage} from "next";
import textStyle from "../pageStyles/text-classes.module.scss";
import scss from "../pageStyles/candidates.module.scss";
import Layout from "../components/Layout/layout";
import {CandidateList} from "../components/CandidateList/CandidateList";
import Link from "next/link";

const Candidates: NextPage = () => {

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <button className={scss.desktopButton}><Link href={"/create"}><p className={scss.link}>New Candidate</p></Link></button>
            <button className={scss.mobileButton}><Link href={"/create"}><p className={scss.link}>+</p></Link></button>
            <h2 className={textStyle.subHeader}> Select a Candidate...</h2>
            <hr className={textStyle.lineBreak}/>
            <CandidateList/>
        </Layout>
    );
};

export default Candidates;