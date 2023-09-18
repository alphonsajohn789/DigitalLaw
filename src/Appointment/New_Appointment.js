import { useNavigate } from 'react-router-dom';
import './New_Appointment.css';
import { useState, useEffect } from 'react';

function New_Appointment() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [dateandtime, setDateandtime] = useState("");
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
                    setError("Name has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;
            case "dateandtime":
                setError("");
                setDateandtime(e.target.value);
                if(e.target.value === ""){
                    setError("Date & Time has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value === ""){
                    setError("Confirm password has left blank!");
                }
                
                break;
            default:
                
        }
    }

    function handleSubmit(){
        if(user !== "" && email !== "" &&  pass2 !== ""){
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
            setDateandtime("");
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

    function checkDateAndTime(){
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
                <label>Full Name</label>
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
                <label>Date & Time</label>
                 <input
                    type="text"
                    name="dateandtime"
                    value={dateandtime}
                    onChange={(e) => handleInputChange(e, "dateandtime")}
                    onBlur={checkDateAndTime}
                />
            
                 <label>Select Expert</label>
                <select>

<option value="Samuel">Samuel Peter</option>

<option value="Mathew">Mathew Richard</option>

<option value="Anna">Anna Garland</option>

</select>
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

export default New_Appointment;