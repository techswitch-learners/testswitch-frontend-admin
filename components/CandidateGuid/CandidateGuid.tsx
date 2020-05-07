import textStyles from "../CandidateGuid/CandidateGuid.module.scss";
import React from "react";
import getConfig from "next/config";

interface CandidateProps {
    guid: string;
}


export function CandidateGuid(props: CandidateProps): JSX.Element {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.GUID_URL;
    const guid = props.guid;
    return (
        <div className={textStyles.guidContainer}>
            {guid === null ? (<p className={textStyles.guidText}>A test url needs to be generated.</p>) : (
                <p className={textStyles.guidText}>{baseUrl}?token={guid}</p>)}
        </div>
    );
}