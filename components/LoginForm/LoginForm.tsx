import {validateCredentialsInApi} from "../../api/loginApiClient.module";
import React, {FormEvent, useState} from "react";
import scss from "./LoginForm.module.scss";
import {useRouter} from "next/router";

interface LoginFormProps {
    userId: string;
    password: string;
    setUserId: (userId: string) => void;
    setPassword: (password: string) => void;
}

export function LoginForm(props: LoginFormProps): JSX.Element {

    const {userId, password, setUserId, setPassword} = props;
    const router = useRouter();

    async function clientSideValidation(userId: string, password: string): Promise<boolean> {

        if (password == "") {
            alert("You did not enter a password! please enter your password.");
            return false;
        }
        if (userId == "") {
            alert("You did not enter a User ID! Please enter your user ID.");
            return false;
        }
        return true;
    }

    function tryLogin(event: FormEvent): void {
        clientSideValidation(props.userId, props.password)
            .then(canBeCheckedInApi => canBeCheckedInApi ?
                validateCredentialsInApi(props.userId, props.password) : false)
            .then(canBeSubmitted => canBeSubmitted ? router.push('/candidates') : {});
        event.preventDefault();
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