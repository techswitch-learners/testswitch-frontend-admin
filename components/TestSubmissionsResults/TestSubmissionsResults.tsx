import React from "react";
import textStyles from './TestSubmissionsResults.module.scss';

interface TestSubmissionsResultsProps {
    testId: string;
    testResult: string;
    testAnswer: string;
}


export function TestSubmissionsResults(props: TestSubmissionsResultsProps): JSX.Element {

    //TODO: how will results appear to admin? for now put textarea as placeholder
    return (
        <li>
            <h2 className={textStyles.testTitle}>Test {props.testId}</h2>
            <textarea
                className={textStyles.textArea}
                value= {props.testAnswer}
                readOnly={true}>
            </textarea>
            <p className={textStyles.testTitle}>{props.testResult}</p>
        </li>
    );
}

