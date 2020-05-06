import React, {FormEvent, useState} from "react";
import scss from "./CreateCandidate.module.scss";
import {useRouter} from "next/router";
import getConfig from "next/config";
import cookie from "cookie";


export function CreateCandidateForm(): JSX.Element {

    const {publicRuntimeConfig} = getConfig();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    function tryCreateCandidate(event: FormEvent): void {
        const CREATE_CANDIDATE_API_URL = publicRuntimeConfig.API_URL + "/candidates/create";
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        const cookies = cookie.parse(document.cookie);
        const sessionId = cookies.sessionId;

        fetch(CREATE_CANDIDATE_API_URL, {
            method: 'POST',
            headers: {"Session-Id": sessionId},
            body: formData
        })
            .then(response => {
                if (response.status == 500) {
                    alert("That email already exists in the system, please enter a different one.");
                    throw new Error(response.statusText);
                }
                if (!response.ok) {
                    alert("Something went wrong, please try again.");
                    throw new Error(response.statusText);
                }
            })
            .then(() => router.push('/candidates'))
            .catch(error => {
                console.log(error);
                router.push('/create');
            });
        event.preventDefault();
    }

    return (
        <form onSubmit={tryCreateCandidate} className={scss.form}>
            <label className={scss.label}>
                First Name:
                <br/>
                <input
                    className={scss.input}
                    type={"text"}
                    name={"firstName"}
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    required={true}
                />
            </label>
            <label className={scss.label}>
                Last Name:
                <br/>
                <input
                    className={scss.input}
                    type={"text"}
                    name={"lastName"}
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    required={true}
                />
            </label>
            <label className={scss.label}>
                Email Address:
                <br/>
                <input
                    className={scss.input}
                    type={"email"}
                    name={"email"}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required={true}
                />
            </label>
            <button className={scss.createButton} type="submit">Create</button>
        </form>
    );
}