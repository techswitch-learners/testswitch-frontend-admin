import React from "react";
import scss from './CandidateList.module.scss';
import textStyles from '../../pageStyles/text-classes.module.scss'
import {getCandidates} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";


interface CandidateListProps {
    
}

export function CandidateList(props: CandidateListProps): JSX.Element {

    const candidates: string[] = ["Michael Walker", "Stephen Jackson"];
    
    return (
        <ul className={scss.list}>
            {
                candidates.map(name => <CandidateLink name={name}/>)
            }
        </ul>
    )
}