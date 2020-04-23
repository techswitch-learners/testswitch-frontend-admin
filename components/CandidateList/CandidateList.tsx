import React from "react";
import scss from './CandidateList.module.scss';
import {getCandidates} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";


export function CandidateList(): JSX.Element {

    //TODO: use getCandidates function to get actual data
    
    type Candidate = {
        name: string;
        id: number;
    }
    
    const candidates: Candidate[] = [
        {name: "Michael Walker", id: 1}, 
        {name: "Stephen Jackson", id: 2},
        ];
    
    return (
        <ul className={scss.list}>
            {
                candidates.map((candidate, index) => <CandidateLink key={index} name={candidate.name} id={candidate.id}/>)
            }
        </ul>
    )
}