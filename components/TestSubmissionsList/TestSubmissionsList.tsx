import React from "react";
import scss from './TestSubmissionsList.module.scss';
import {TestSubmissionsResults} from "../TestSubmissionsResults/TestSubmissionsResults";

interface Test {
    testId: number;
    testResult: string;
    testAnswer: string;
}

interface TestSubmissionsListProps {
    tests: Test[];
}

export function TestSubmissionsList(props: TestSubmissionsListProps): JSX.Element {

    return (
        <ul className={scss.list}>
            {
                props.tests.map(test => {
                    return (
                        <TestSubmissionsResults
                            key={props.tests.indexOf(test)}
                            testId={test.testId}
                            testResult={test.testResult}
                            testAnswer={test.testAnswer}
                        />
                    )
                })
            }
        </ul>
    )
}