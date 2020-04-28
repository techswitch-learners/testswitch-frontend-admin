import React from "react";
import scss from './TestSubmissionsList.module.scss';
import {TestSubmissionsResults} from "../TestSubmissionsResults/TestSubmissionsResults";


export function TestSubmissionsList(): JSX.Element {
    
    const tests: string [] = ["Test 1", "Test 2", "Test 3"];
    
    return (
        <ul className={scss.list}>
            {
                tests.map(test => <TestSubmissionsResults key={tests.indexOf(test)} test={test}/>)
            }
        </ul>
    )
}