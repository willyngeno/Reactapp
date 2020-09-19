import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import AppContext from "../../Context";
import classes from "./Mail.module.css";

function Failure ( { id } )
{
    const [ hasSent, setHasSent ] = useState( false );
    const { sendData } = useContext( AppContext );
    const history = useHistory();
    const [ content, setContent ] = useState( (
        <div className={ classes.Fail }>
            <p> This user does not exist </p>
            <NavLink to="/sign-up" className={ classes.Link } >
                Sign Up
                     </NavLink>
        </div>

    ) );


    const checkEmail = async () =>
    {
        const response = await sendData(
            {
                endpoint: `trouble-account?id=${ id }`
            } );

        if ( response.error )
        {
            setHasSent( true );

        }
        else if ( response.data.message === "User has already been verified " )
        {
            history.push( "/sign-in" );
        }
        else 
        {
            setContent(
                (

                    <div className={ classes.Fail }>
                        <p> A new email has been sent to you. </p>
                    </div>

                ) );
            setHasSent( true );
        }


    };



    return (
        <div className={ classes.Body } >
            <h1 className={ classes.Header }>Something went wrong!</h1>
            {
                hasSent ?
                    content
                    :
                    (
                        <div className={ classes.Fail }>
                            <p>Either </p>

                            <ul>
                                <li>Your account has already been verified, or</li>
                                <li>The token has expired.</li>
                            </ul>

                            <p>Click the link below, and more instructions will be sent to your mail</p>

                            <button onClick={ checkEmail } className={ classes.Link } >
                                Trouble verifying account
               </button>
                        </div>

                    )
            }




        </div>
    );
}

export default Failure;
