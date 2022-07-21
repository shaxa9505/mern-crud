import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import {Link} from "react-router-dom"

function Admin(props) {

    const [dataBase, setDataBase] = useState([])

    useEffect(() => {
        fetch("/admin")
            .then(res => res.json())
            .then(data => {
                setDataBase(data.admin)
                // console.log(data.admin);
            })
    }, [dataBase])

    // console.log(dataBase)

    const deleteItem = (id) => {
        fetch(`/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                toast.success(result.msg)
            })
    }

    const updateUser = (id) => {
        fetch(`/put/${id}`, {
            method: "PUT"
        })
    }


    return (
        <div className="container m-auto">
            <h2>Admin panel</h2>
            {dataBase.length ? 
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ism</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                {dataBase.map((item, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={() => deleteItem(item._id)} className="btn btn-danger">Delete</button>
                                    <button className="btn btn-warning ms-2"><Link style={{color: "white", textDecoration: "none"}} to={`/signUp/update/${item._id  }`}>Update</Link></button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            : "Databaseda ma'lumotlar yuq"
            }
        </div>
    );
}

export default Admin;