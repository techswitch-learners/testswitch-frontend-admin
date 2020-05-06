import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"
import Link from "next/link";
import Layout from "../components/Layout/layout";
import textStyle from "../pageStyles/text-classes.module.scss";

const Home: NextPage = () => 
    <Layout>
        <h1 data-testid="page-render-test" className={scss.example}>Welcome Admins</h1>
        <hr className={textStyle.lineBreak}/>
        <div className={scss.linkBtnContainer}>
            <Link href={"/login"}><a className={scss.linkBtn}>Go To Log in</a></Link>
        </div>
    </Layout>;

export default Home;
