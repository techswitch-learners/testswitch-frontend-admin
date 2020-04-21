import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/candidates.module.scss"
import Layout from "../components/Layout/layout";


const Candidates: NextPage = () =>
    <Layout>
        <h1 className={scss.h1}>Candidates</h1>
    </Layout>;

export default Candidates;