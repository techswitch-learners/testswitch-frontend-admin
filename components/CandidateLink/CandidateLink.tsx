import React from "react";
import textStyles from './CandidateLink.module.scss';
import Link from "next/link";



interface CandidateLinkProps {
    name : string;
}


export function CandidateLink(props: CandidateLinkProps): JSX.Element {

    const ref: string = "/candidates/" + props.name;
    
    return (
        <li className={textStyles.listItem}>
            <Link href={ref}>
                <p className={textStyles.link}>{props.name}</p>
            </Link>
            <hr/>
        </li>
    )
}