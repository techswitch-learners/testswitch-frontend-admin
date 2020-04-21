import React from "react";
import textStyles from './CandidateLink.module.scss';



interface CandidateLinkProps {
    name : string;
}


export function CandidateLink(props: CandidateLinkProps): JSX.Element {

    return (
        <li className={textStyles.listItem}>
            {props.name}
            <hr/>
        </li>
    )
}