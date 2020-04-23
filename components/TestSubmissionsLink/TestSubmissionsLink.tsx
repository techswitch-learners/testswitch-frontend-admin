import React from "react";
import textStyles from './TestSubmissionsLink.module.scss';
import Link from "next/link";

interface TestSubmissionsLinkProps {
    test: string;
}

export function TestSubmissionsLink(props: TestSubmissionsLinkProps) : JSX.Element {
    
    const ref: string = "/test-submissions/"; 
   
    //TODO: how will results appear to admin? for now put textarea as placeholder

    return (
        <li className={textStyles.listItem}>
            <Link href={ref}>
                <p className={textStyles.link}>{props.test}</p>
            </Link>
            <textarea className={textStyles.textArea}>
                Placeholder for Test Results
            </textarea>
        </li>
    );
}

