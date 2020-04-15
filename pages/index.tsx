import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"


const Home: NextPage = () => <h1 data-testid="page-render-test" className={scss.example}>Hello Admin</h1>;

export default Home;
