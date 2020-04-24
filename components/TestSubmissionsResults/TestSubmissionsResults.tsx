import React from "react";
import textStyles from './TestSubmissionsResults.module.scss';

interface TestSubmissionsResultsProps {
    test: string;
}

export function TestSubmissionsResults(props: TestSubmissionsResultsProps): JSX.Element {
   
    //TODO: how will results appear to admin? for now put textarea as placeholder

    return (
        <li className={textStyles.listItem}>
                <p>{props.test}</p>
            <textarea className={textStyles.textArea}>
                Placeholder for Test Results
            </textarea>
        </li>
    );
}

