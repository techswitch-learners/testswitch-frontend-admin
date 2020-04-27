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
            {/*<textarea className={textStyles.textArea}>*/}
            {/*    Placeholder for Test Results*/}
            {/*</textarea>*/}
            <TextEditorContainer 
                height={"90"} 
                width={"90"} 
                language={'javascript'}
                defaultText={"defaultText"} 
                theme={"dark"}
            />
        </li>
    );
}

