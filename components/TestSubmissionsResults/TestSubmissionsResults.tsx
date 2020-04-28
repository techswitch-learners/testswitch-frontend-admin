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
                    height={"60vh"}
                    width={"100%"}
                    language={'javascript'}
                    defaultText={"Candidates Test Answers"}
                />
        </li>
    );
}

