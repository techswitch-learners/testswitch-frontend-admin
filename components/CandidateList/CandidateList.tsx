import React, {useEffect, useState} from "react";
import scss from './CandidateList.module.scss';
import {Candidate, getCandidates, ListResponse} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";

interface CandidatesListProps {
    fetchCandidates: ListResponse<Candidate>;
}

export function CandidateList(props: CandidatesListProps): JSX.Element {
    const candidates=props.fetchCandidates.items;
    return (
        <ul className={scss.list}>
            {
                candidates.map((candidate, index) => <CandidateLink key={index} name={`${candidate.firstName} ${candidate.lastName}`} id={candidate.id}/>)
            }
        </ul>
    )
}