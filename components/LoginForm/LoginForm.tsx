﻿import React, {FormEvent, useState} from "react";
import {apiTryLogin} from "../../api/loginApiClient.module";

interface LoginFormProps {
    userId: string;
    password: string;
    setUserId: Function;
    setPassword: Function;
}

type FormStatus = "READY" | "FINISHED";

export function LoginForm(props: LoginFormProps): JSX.Element {

    const [status, setStatus] = useState<FormStatus>("READY");

    function tryLogin(event: FormEvent) {
        event.preventDefault();
        apiTryLogin(props.userId, props.password)
            .then(() => setStatus("FINISHED"))
            .catch(() => alert)
    }

    if (status === "FINISHED") {
        return <div>
            Login Form Submitted
        </div>
    }

    return (
        <form onSubmit={tryLogin}>
            <label>
                User Id:
                <input
                    type={"text"}
                    value={props.userId}
                    onChange={event => props.setUserId(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type={"password"}
                    value={props.password}
                    onChange={event => props.setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}