import {apiTryLogin} from "../../api/loginApiClient.module";
import React, {FormEvent, useState} from "react";
import scss from "./LoginForm.module.scss";

interface LoginFormProps {
    userId: string;
    password: string;
    setUserId: (userId: string) => void;
    setPassword: (password: string) => void;
}

type FormStatus = "READY" | "FINISHED";

export function LoginForm(props: LoginFormProps): JSX.Element {
    
    const {userId, password, setUserId, setPassword} = props;
    
    const [status, setStatus] = useState<FormStatus>("READY");

    function tryLogin(event: FormEvent): void {
        apiTryLogin(props.userId, props.password)
            .catch((exp: DOMException) => {
                alert(exp);
            })
            .then(canBeSubmitted => canBeSubmitted ? setStatus("FINISHED"):{});
    }

    if (status === "FINISHED") {
        return <h2 className={scss.h2}>Login Form Submitted</h2>;
    }

    return (
        <form onSubmit={tryLogin} className={scss.form}>
            <label className={scss.label}>
                User Id:
                <br/>
                <input
                    className={scss.input}
                    type={"text"}
                    value={props.userId}
                    onChange={event => props.setUserId(event.target.value)}
                />
            </label>
            <label className={scss.label}>
                Password:
                <br/>
                <input
                    className={scss.input}
                    type={"password"}
                    value={props.password}
                    onChange={event => props.setPassword(event.target.value)}
                />
            </label>
            <button className={scss.login} type="submit">Log In</button>
        </form>
    );
}