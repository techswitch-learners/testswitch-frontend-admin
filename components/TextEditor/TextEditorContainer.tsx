import React from "react";
import Editor from "@monaco-editor/react";
import scss from "./TextEditorContainer.module.scss";
import {TextEditorSettings} from "./TextEditorSettings";
import {SupportedLanguages} from "../../Models/SupportedLanguages";


interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
    language: SupportedLanguages;
}

export function TextEditorContainer(props: TextEditorContainerProps): JSX.Element {
    return (
        <section className={scss.textEditorBox}>
                <Editor
                    theme="dark"
                    height={props.height}
                    width={props.width}
                    language="javascript"
                    value={props.defaultText}
                    options={TextEditorSettings}
                />
        </section>
      
   )
}

export default TextEditorContainer;