import { useNavigate } from 'react-router-dom';
import '../style/style.css';
import { useState, useEffect } from 'react';

function Register() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect( ()=> {
        setTimeout(function(){
            setMsg("");
        }, 15000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value === ""){
                    setError("Confirm password has left blank!");
                }
                else if(e.target.value !== pass1){
                    setError("Confirm password does not match");
                }
                
                break;
            default:
                
        }
    }

    function handleSubmit(){
        if(user !== "" && email !== "" && pass1 !== "" && pass2 !== ""){
            var url = "http://localhost/react/registration.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                user: user,
                email: email,
                pass: pass2 
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) => {
                setError(err);
                console.log(err);
            });
            setUser("");
            setEmail("");
            setPass1("");
            setPass2("");
        }
        else{
            setError("All fields are required!");
        }
    }

    function checkUser(){
        var url = "http://localhost/react/checkuser.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            user: user
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) => {
            setError(err);
            console.log(err);
        });    
    }

    function checkEmail(){
        var url = "http://localhost/react/checkemail.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) => {
            setError(err);
            console.log(err);
        });    
    }

    function checkPassword(){
        if(pass1.length < 8){
            setError("Password is less than 8 characters!")
        }
    }

    return (
        <>
            <div className='form'>
                <p>
                    {
                        msg !== "" ?
                        <span className='success'>{msg}</span> :
                        <span className='error'>{error}</span>
                    }
                </p>
                <label>Username</label>
                <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={(e) => handleInputChange(e, "user")}
                    onBlur={checkUser}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                    onBlur={checkEmail}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="pass1"
                    value={pass1}
                    onChange={(e) => handleInputChange(e, "pass1")}
                    onBlur={checkPassword}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="pass2"
                    value={pass2}
                    onChange={(e) => handleInputChange(e, "pass2")}
                />
                <label></label>
                <input
                    type="submit"
                    defaultValue="Submit"
                    className='button'
                    onClick={handleSubmit}
                />
                
                <button onClick={() => navigate(-1)}>Go back</button>

            </div>
        </>
    );
}

export default Register;