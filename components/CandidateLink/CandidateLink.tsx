import React from "react";
import textStyles from './CandidateLink.module.scss';
import {useRouter} from "next/router";


interface CandidateLinkProps {
    name: string;
    id: number;
    guid: string;
}


export function CandidateLink(props: CandidateLinkProps): JSX.Element {
    const router = useRouter();
    const ref: string = "/testsubmissions";
    const clickHandler = () => {
        router.push({
            pathname: ref,
            query: {
                name: props.name,
                token: props.guid,
            }
        })
    };
    return (
        <li className={textStyles.listItem}>
            <a
                onClick={clickHandler}
            >
                <p className={textStyles.link}>{props.name}</p>
            </a>
            <hr/>
        </li>
    )
}