import textStyles from "../../pageStyles/text-classes.module.scss";
import React from "react";

interface CandidateProps {
    guid: string,
}


export function CandidateGuid(props: CandidateProps): JSX.Element {
    return (
        <h2 className={textStyles.subHeader}>{props.guid}</h2>
    );
}