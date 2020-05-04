import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"
import Layout from "../components/Layout/layout";

const Home: NextPage = () =>
    <Layout>
        <h1 data-testid="page-render-test" className={scss.example}>Hello Admin Site</h1>
    </Layout>;

Home.getInitialProps = ({res}) => {

    if (res) {
        res.writeHead(301, {
            Location: 'candidates'
        });
        res.end();
    }
    return {};
};

export default Home;
