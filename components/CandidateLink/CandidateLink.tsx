import React from "react";
import textStyles from './CandidateLink.module.scss';
import Link from "next/link";



interface CandidateLinkProps {
    name: string;
    id: number;
}


export function CandidateLink(props: CandidateLinkProps): JSX.Element {

    const ref: string = "/candidates/" + props.id;
    
    return (
        <li className={textStyles.listItem}>
            <Link href={ref}>
                <p className={textStyles.link}>{props.name}</p>
            </Link>
            <hr/>
        </li>
    )
}