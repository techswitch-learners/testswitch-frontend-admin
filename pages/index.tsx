import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"
import Layout from "../components/Layout/layout";
import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig();

const Home: NextPage = () => 
    <Layout>
        <h1 data-testid="page-render-test" className={scss.example}>Hello {publicRuntimeConfig.API_URL}</h1>
    </Layout>;

export default Home;
