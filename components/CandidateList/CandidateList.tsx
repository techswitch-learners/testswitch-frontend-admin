import React, {useEffect, useState} from "react";
import scss from "../../pageStyles/candidates.module.scss";
import {Candidate, getCandidates, ListResponse} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";
import Router , {useRouter}  from 'next/router';

interface CandidatesListProps {
    candidatesList: ListResponse<Candidate>;
}

export function CandidateList(props: CandidatesListProps): JSX.Element {
    const candidates=props.candidatesList.items;

    function decrementPage(){
        Router.push(`/candidates?page=${props.candidatesList.page - 1}&pageSize=10`);
    }

    function incrementPage(){
        Router.push(`/candidates?page=${props.candidatesList.page + 1}&pageSize=10`);
    }

    return (
        <div>
            <ul className={scss.list}>
                {
                    candidates.map((candidate, index) => <CandidateLink key={index} name={`${candidate.firstName} ${candidate.lastName}`} id={candidate.id}/>)
                }
            </ul>
            <div className={scss.narBar}>
                {props.candidatesList.previousPage && <button type="button" className={scss.navButton} onClick={decrementPage}>Previous</button>}
                {props.candidatesList.nextPage && <button type="button" className={scss.navButton} onClick={incrementPage}>Next</button>}
            </div>
        </div>

    )
}
