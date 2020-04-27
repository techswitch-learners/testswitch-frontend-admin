import React, {useEffect, useState} from "react";
import scss from './CandidateList.module.scss';
import {Candidate, getCandidates, ListResponse} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";

interface CandidatesListProps {
    fetchCandidates: () => Promise<ListResponse<Candidate>>;
}

export function CandidateList(props: CandidatesListProps): JSX.Element {

    //TODO: use getCandidates function to get actual data
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        props.fetchCandidates()
            .then(response => setCandidates(response.items));
    }, [props]);
  
   
    
    return (
        <ul className={scss.list}>
            {
                candidates.map((candidate, index) => <CandidateLink key={index} name={`${candidate.firstName} ${candidate.lastName}`} id={candidate.id}/>)
            }
        </ul>
    )
}