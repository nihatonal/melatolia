import React, { useState, useContext } from "react";
import Input from '../../shared/components/formElements/Input'
import { useHttpClient } from "../../shared/hooks/http-hook";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import LoadingSpinner from '../../shared/UI/LoadingSpinner'

import './ContactForm.css'
function ContactForm(props) {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            fname_lname: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            subject: {
                value: "",
                isValid: false,
            },
            message: {
                value: "",
                isValid: false,
            },
        },
        false
    );


    const authSubmitHandler = async event => {
        event.preventDefault();

    };

    return (
        <div className="">
            <form onSubmit={authSubmitHandler} className="sign_up_inputs_wrapper">

                <Input
                    id="fname_lname"
                    element="input"
                    type="text"
                    placeholder="Firstname Lastname"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />
                <Input
                    id="email"
                    element="input"
                    type="email"
                    placeholder="Email Address"
                    validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                />
                <Input
                    id="phone"
                    element="input"
                    type="text"
                    placeholder="Phone"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                 <Input
                    id="subject"
                    element="input"
                    type="text"
                    placeholder="Subject"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="message"
                    element="textarea"
                    type="text"
                    placeholder="Message"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />


                <button type="submit"
                    // disabled={!formState.isValid} 
                    className="signup_button">
                    {isLoading ? <LoadingSpinner /> : 'Submit'}

                </button>
            </form>

        </div>
    );
}

export default ContactForm;