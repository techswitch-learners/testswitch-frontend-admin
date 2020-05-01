import React from "react";
import Editor from "@monaco-editor/react";
import scss from "./TextEditorContainer.module.scss";
import {TextEditorSettings} from "./TextEditorSettings";

export function TextEditorContainer(): JSX.Element {
    return (
        <section className={scss.textEditorBox}>
                <Editor
                    theme="dark"
                    height="60vh"
                    width="100%"
                    language="javascript"
                    value="Candidates Test Answers"
                    options={TextEditorSettings}
                />
        </section>
      
   )
}

export default TextEditorContainer;