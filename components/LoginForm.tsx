import React, {useContext, useState} from "react";
import {NextPage} from "next";
import scss from "../pageStyles/index.module.scss"


interface LoginFormProps {
    userId : string;
    password: string;
    setUserId : Function;
    setPassword : Function;
}

export function LoginForm(props: LoginFormProps): JSX.Element {
   
    return (
            <form>
                <label>
                    User Id:
                    <input type={"text"} value={props.userId}
                           onChange={event => props.setUserId(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} value={props.password} onChange={event => props.setPassword(event.target.value)}/>
                </label>

                <button type="submit">Log In</button>
            </form>
    );
}