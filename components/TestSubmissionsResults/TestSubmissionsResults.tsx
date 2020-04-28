import React from "react";
import textStyles from './TestSubmissionsResults.module.scss';
import TextEditorContainer from "../TextEditor/TextEditorContainer";

interface TestSubmissionsResultsProps {
    test: string;
}

export function TestSubmissionsResults(props: TestSubmissionsResultsProps): JSX.Element {
    return (
        <li>
            <h2 className={textStyles.testTitle}>{props.test}</h2>
            <TextEditorContainer
                theme={"dark"}
                height={"70vh"} 
                width={"80vw"} 
                language={'javascript'}
                defaultText={"Candidates Test Answers"}
            />
        </li>
    );
}

