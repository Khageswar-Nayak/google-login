import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import '../App.css';

function SignIn() {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
            })
            .catch((error) => {
                setError(error.message); 
                alert(error.message);
            });
    };

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem('user')));
    }, []);

    return (
        <div>
            {value ? (
                <Home data={value} />
            ) : (
                <div>
                    <button onClick={handleClick} className="signIn-button">
                        <img src="https://clipartcraft.com/images/transparent-background-google-logo-high-resolution-9.png" alt="Google Logo" />
                        Sign in With Google
                    </button>
                    {error && <div style={{color:"red"}}>{error}</div>}
                </div>
            )}
        </div>
    );
}

export default SignIn;
