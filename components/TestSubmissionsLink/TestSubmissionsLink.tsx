import React from "react";
import textStyles from './TestSubmissionsLink.module.scss';

interface TestSubmissionsLinkProps {
    test: string;
}

export function TestSubmissionsLink(props: TestSubmissionsLinkProps): JSX.Element {
   
    //TODO: how will results appear to admin? for now put textarea as placeholder

    return (
        <li className={textStyles.listItem}>
                <p className={textStyles.link}>{props.test}</p>
            <textarea className={textStyles.textArea}>
                Placeholder for Test Results
            </textarea>
        </li>
    );
}

