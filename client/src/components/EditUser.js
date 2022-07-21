import React, {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';

function EditUser(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        fetch(`/updateUser/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(result => {
                toast.success(result.msg);
                navigate("/admin")
            })


        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container m-auto mt-5">
            <h1 className="text-center">Ruyhatdan o'tish o'zgartirish</h1>
            <form onSubmit={submitHandle}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Isminigz</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" value={name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Emailingiz</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Parolingiz</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" value={password} />
                </div>
                <button type="submit" className="btn btn-primary">O'zgartirish</button>
            </form>
        </div>
    );
}

export default EditUser;