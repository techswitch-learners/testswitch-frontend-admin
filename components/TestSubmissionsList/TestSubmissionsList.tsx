import React from "react";
import scss from './TestSubmissionsList.module.scss';
import {TestSubmissionsResults} from "../TestSubmissionsResults/TestSubmissionsResults";

interface TestSubmissionsListProps {
    tests: string[];
}

export function TestSubmissionsList(props: TestSubmissionsListProps): JSX.Element {
    
    return (
        <ul className={scss.list}>
            {
                props.tests.map(test => {
                    const testParsed = JSON.parse(JSON.stringify(test));
                    return (
                        <TestSubmissionsResults
                            key={props.tests.indexOf(test)}
                            testId={testParsed.testId}
                            testResult={testParsed.testResult}
                            testAnswer={testParsed.testAnswer}
                        />
                    )
                })
            }
        </ul>
    )
}