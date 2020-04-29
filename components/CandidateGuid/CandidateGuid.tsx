import textStyles from "../CandidateGuid/CandidateGuid.module.scss";
import React from "react";

interface CandidateProps {
    guid: string,
}


export function CandidateGuid(props: CandidateProps): JSX.Element {
    const baseUrl: string = `https://testswitch-api-staging.herokuapp.com/sessions`;
    const guid: string = props.guid;
    return (
        <div className={textStyles.guidContainer}>
        <ul className={textStyles.guidBox}>
            {guid===null?(<li className={textStyles.guidLi}>A test url needs to be generated.</li>):(<li className={textStyles.guidLi}>{baseUrl}/{guid}</li>)}
        </ul>
        </div>
    );
}