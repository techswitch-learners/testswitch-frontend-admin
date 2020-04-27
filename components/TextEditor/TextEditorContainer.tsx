import React from "react";
import Editor from "react-monaco-editor";
import {TextEditorSettings} from "./TextEditorSettings";

interface TextEditorContainerProps {
    theme?: string;
    height: string;
    width: string;
    defaultText: string;
}

export function TextEditorContainer(props: TextEditorContainerProps): JSX.Element {
   return (
       <div>
           <Editor 
           theme={props.theme}
           height={props.height}
           width={props.width}
           language='javascript'
           value={props.defaultText}
           options={TextEditorSettings}
           />
       </div>
   )
}

export default TextEditorContainer;