import React, {FormEvent, useState} from "react";
import scss from "./LoginForm.module.scss";
import {useRouter} from "next/router";
import getConfig from "next/config";


export function LoginForm(): JSX.Element {
    const {publicRuntimeConfig} = getConfig();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    function credentialsAreValid(statusCode: number): boolean {

        if (statusCode == 403) {
            alert("Those details are not in our system! Please try again");
            return false;
        }
        if (statusCode != 200) {
            alert("Something went wrong, please try again.");
            return false;
        }
        return true;
    }

    function tryLogin(event: FormEvent): void {
        const ATTEMPT_SIGN_IN_API_URL = "https://localhost:5001/sign-in";
        const formData = new FormData();
        formData.append('email', userId);
        formData.append('password', password);

        fetch(ATTEMPT_SIGN_IN_API_URL, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.status == 401) {
                    alert("Unauthorized! Those details don't exist in our system.");
                    throw new Error(response.statusText);
                }
                if (response.status == 400) {
                    alert("Please enter a valid email and password.");
                    throw new Error(response.statusText);
                }
                if (!response.ok) {
                    alert("Something went wrong, please try again.");
                    throw new Error(response.statusText);
                }
            })
            .then(() => router.push('/candidates'))
            .catch(error => {
                console.log(error)
            });
        event.preventDefault();
    }

    return (
        <form onSubmit={tryLogin} className={scss.form}>
            <label className={scss.label}>
                Email:
                <br/>
                <input
                    className={scss.input}
                    type={"email"}
                    value={userId}
                    onChange={event => setUserId(event.target.value)}
                    required={true}
                />
            </label>
            <label className={scss.label}>
                Password:
                <br/>
                <input
                    className={scss.input}
                    type={"password"}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required={true}
                />
            </label>
        </form>
    );
} 