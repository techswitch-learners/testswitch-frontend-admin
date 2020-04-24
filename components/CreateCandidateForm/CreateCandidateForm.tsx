import {tryCreateApi} from "../../api/candidatesApiClient";
import React, {FormEvent, useState} from "react";
import scss from "./CreateCandidate.module.scss";
import {useRouter} from "next/router";

interface CreateCandidateFormProps {
    firstName: string;
    lastName: string;
    email: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
}

export function CreateCandidateForm(props: CreateCandidateFormProps): JSX.Element {

    const {firstName, lastName, email, setFirstName, setLastName, setEmail} = props;
    const router = useRouter();

    function candidateIsValid(statusCode: number): boolean {

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

    async function tryCreateCandidate(event: FormEvent): Promise<void> {
        const apiStatusCode = await tryCreateApi(props.firstName, props.lastName, props.email);
        candidateIsValid(apiStatusCode) ? await router.push('/candidates') : {};
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
                    value={props.firstName}
                    onChange={event => props.setFirstName(event.target.value)}
                    required={true}
                />
            </label>
            <label className={scss.label}>
                Last Name:
                <br/>
                <input
                    className={scss.input}
                    type={"text"}
                    value={props.lastName}
                    onChange={event => props.setLastName(event.target.value)}
                    required={true}
                />
            </label>
            <label className={scss.label}>
                Email Address:
                <br/>
                <input
                    className={scss.input}
                    type={"email"}
                    value={props.email}
                    onChange={event => props.setEmail(event.target.value)}
                    required={true}
                />
            </label>
            <button className={scss.login} type="submit">Create</button>
        </form>
    );
}