import React from "react";
import scss from './TestSubmissionsList.module.scss';
import {TestSubmissionsLink} from "../TestSubmissionsLink/TestSubmissionsLink";


export function TestSubmissionsList(): JSX.Element {
    
    //TODO: getTestSubmissions result from API
    
    const tests: string [] = ["Test 1, Test 2"];
    
    return (
        <ul className={scss.list}>
            {
                tests.map(test => <TestSubmissionsLink key={tests.indexOf(test)} test={test}/>)
            }
        </ul>
    )
}