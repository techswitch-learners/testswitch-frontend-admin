import React from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"


const LogIn: NextPage = () => 
    <div>
        <h1 className={scss.example}>Candidate Manager</h1>
        <h2>Administrator Login</h2>
        <hr/>
        <h2>User ID</h2>
        <input/>
        <h2>Password</h2>
        <input/>
        <br/><br/>
        <button>Login</button>
    </div>;
    
export default LogIn;