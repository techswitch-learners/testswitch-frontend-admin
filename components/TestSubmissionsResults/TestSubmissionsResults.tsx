import React from "react";
import textStyles from './TestSubmissionsResults.module.scss';
import TextEditorContainer from "../TextEditor/TextEditorContainer";

interface TestSubmissionsResultsProps {
    testId: string;
    testResult: string;
    testAnswer: string;
}


export function TestSubmissionsResults(props: TestSubmissionsResultsProps): JSX.Element {
    return (
        <li>
            <h2 className={textStyles.testTitle}>Test {props.testId}</h2>
                <TextEditorContainer/>
            <p className={textStyles.testTitle}>{props.testResult}</p>
        </li>
    );
}

