import React from "react";
import textStyles from "../CandidateLink/CandidateLink.module.scss";
import Link from "next/link";

interface TestSubmissionLinkProps {
    name: string;
}

export function TestSubmissionLink(props: TestSubmissionLinkProps) : JSX.Element {
    
    const ref: string = "/candidates/test-submission" + props.name; 
   
    return (
        <li>
           
        </li>
    )
}