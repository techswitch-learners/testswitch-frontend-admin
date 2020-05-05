import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"
import Layout from "../components/Layout/layout";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from "next/link";

const Home: NextPage = () => {
    
    // const router = useRouter();
    // useEffect(() => {
    //         router.push('/candidates')
    // }, []);

    return (
        <Layout>
            <Link href={"/login"}><h1 data-testid="page-render-test" className={scss.loginLink}>Click to login</h1></Link>
        </Layout>
        )
};

export default Home;