import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom"

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                toast.error(data.error)
            }
            else {
                navigate("/");
                localStorage.setItem("token", data.user._id);
                toast.success(data.msg);
                window.location.reload()
            }
        })
    }

    return (
        <div className="container m-auto mt-5">
            <h1 className="text-center">Tizimga kirish</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Emailingiz</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Parolingiz</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" value={password} />
                </div>
                <button type="submit" className="btn btn-primary">Jo'natish</button>
            </form>
        </div>
    );
}

export default Login;