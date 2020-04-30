import textStyles from "../CandidateGuid/CandidateGuid.module.scss";
import React from "react";

interface CandidateProps {
    guid: any;
}


export function CandidateGuid(props: CandidateProps): JSX.Element {
    const baseUrl = `https://testswitch-candidate.herokuapp.com`;
    const guid = props.guid;
    return (
        <div className={textStyles.guidContainer}>
            {guid === null ? (<p className={textStyles.guidText}>A test url needs to be generated.</p>) : (
                <p className={textStyles.guidText}>{baseUrl}?token=${guid}</p>)}
        </div>
    );
}