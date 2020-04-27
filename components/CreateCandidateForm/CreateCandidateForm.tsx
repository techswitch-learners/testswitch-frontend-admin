import {tryCreateApi} from "../../api/candidatesApiClient";
import React, {FormEvent, useState} from "react";
import scss from "./CreateCandidate.module.scss";
import {useRouter} from "next/router";
import {API_ROUTE} from "next/dist/lib/constants";

interface CreateCandidateFormProps {
   
}

export function CreateCandidateForm(props: CreateCandidateFormProps): JSX.Element {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    function candidateIsValid(statusCode: number): boolean {
        if (statusCode == 403){
            router.push('/login');
            return false;
        }
        if (statusCode != 200) {
            alert("Something went wrong, please try again.");
            return false;
        }
        return true;
    }

    
    function tryCreateCandidate(event: FormEvent): void {
        const CREATE_CANDIDATE_API_URL = "https://testswitch-api-staging.herokuapp.com/candidates/create";
        const formElement = document.querySelector("form");
        fetch(CREATE_CANDIDATE_API_URL, {
            method: 'POST',
            body: new FormData(formElement)
        })
            .then(posted => posted ? router.push('/candidates'): {})
            .catch(error => console.error(error));
        
        
        // const apiStatusCode = await tryCreateApi(firstName, lastName, email);
        // candidateIsValid(apiStatusCode) ? await router.push('/candidates') : {};
        event.preventDefault();
    }

    return (
        <form onSubmit={tryCreateCandidate} id={'form'} className={scss.form}>
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
                    name={lastName}
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