import React from "react";
import scss from './CandidateList.module.scss';
import {getCandidates} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";


export function CandidateList(): JSX.Element {

    //TODO: use getCandidates function to get actual data
    
    const candidates: string[] = ["Michael Walker", "Stephen Jackson"];
    
    return (
        <ul className={scss.list}>
            {
                candidates.map(name => <CandidateLink key={candidates.indexOf(name)} name={name}/>)
            }
        </ul>
    )
}