import React, {useEffect, useState} from "react";
import scss from "../../pageStyles/candidates.module.scss";
import {Candidate, getCandidates, ListResponse} from "../../api/candidatesApiClient";
import {CandidateLink} from "../CandidateLink/CandidateLink";
import Router , {useRouter}  from 'next/router';
import Link from "next/link";

interface CandidatesListProps {
    candidatesList: ListResponse<Candidate>;
}

export function CandidateList(props: CandidatesListProps): JSX.Element {
    const candidates=props.candidatesList.items;

    return (
        <div>
            <ul className={scss.list}>
                {
                    candidates.map((candidate, index) => <CandidateLink key={index} name={`${candidate.firstName} ${candidate.lastName}`} id={candidate.id}/>)
                }
            </ul>
            <div className={scss.navBar}>
                {props.candidatesList.previousPage && <Link  href={props.candidatesList.previousPage}><a className={scss.navButton}>Previous</a></Link>}
                {props.candidatesList.nextPage && <Link href={props.candidatesList.nextPage}><a className={scss.navButton}>Next</a></Link>}
            </div>
        </div>

    )
}
