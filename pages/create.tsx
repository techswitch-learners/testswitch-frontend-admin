import React, {useState} from "react";
import textStyle from "../pageStyles/text-classes.module.scss";
import Layout from "../components/Layout/layout";
import {NextPage} from "next";
import {CreateCandidateForm} from "../components/CreateCandidateForm/CreateCandidateForm";

const LoginPage: NextPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Candidate Manager</h1>
            <h2 className={textStyle.subHeader}>Create Candidate</h2>
            <hr className={textStyle.lineBreak}/>
            <CreateCandidateForm
                firstName={firstName}
                lastName={lastName}
                email={email}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}/>
        </Layout>
    );
};
export default LoginPage;