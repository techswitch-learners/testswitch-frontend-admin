import React from "react";
import Editor from "@monaco-editor/react";
import scss from "./TextEditorContainer.module.scss";
import {TextEditorSettings} from "./TextEditorSettings";
import {SupportedLanguages} from "../../Models/SupportedLanguages";


interface TextEditorContainerProps {
    theme?: string;
    height: string;
    width: string;
    defaultText: string;
    language: SupportedLanguages;
}

export function TextEditorContainer(props: TextEditorContainerProps): JSX.Element {
    return (
        <section>
            <div className={scss.textEditorBox}>
                <Editor
                    theme={props.theme}
                    height={props.height}
                    width={props.width}
                    language={props.language}
                    value={props.defaultText}
                    options={TextEditorSettings}
                />
            </div>
        </section>
      
   )
}

export default TextEditorContainer;