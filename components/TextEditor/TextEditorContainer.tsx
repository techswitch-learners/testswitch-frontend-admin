import React from "react";
import Editor from "@monaco-editor/react";
import scss from "./TextEditorContainer.module.scss";
import {TextEditorSettings} from "./TextEditorSettings";

interface TestEditorContainerProps {
    testAnswer: string;
}

export function TextEditorContainer(props: TestEditorContainerProps): JSX.Element {
    return (
                <section className={scss.textEditorBox}>
                    <Editor
                        theme="dark"
                        height="60vh"
                        width="90vw"
                        language="javascript"
                        value={props.testAnswer}
                        options={TextEditorSettings}
                    /> 
                </section>
    )
}

export default TextEditorContainer;