import React from "react";
import scss from './TestSubmissionsList.module.scss';
import {TestSubmissionsResults} from "../TestSubmissionsResults/TestSubmissionsResults";

interface TestSubmissionsListProps {
    tests: string[];
}
export function TestSubmissionsList(props: TestSubmissionsListProps): JSX.Element {

    const testHolder: string [] = ["Test 1", "Test 2", "Test 3"];
    return (
        <ul className={scss.list}>
            {
                props.tests.length > 0 ?
                    (props.tests.map(test => {
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
                    ):(testHolder.map(test => {
                            return (
                                <TestSubmissionsResults
                                    key={props.tests.indexOf(test)}
                                    testId={test}
                                    testResult={""}
                                    testAnswer={'Placeholder for Test Results'}
                                />
                            )
                        })
                    )
            }
        </ul>
    )
}