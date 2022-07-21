import React from 'react';
import {Link} from "react-router-dom"

function Error(props) {
    return (
        <div>
            <h2 className="text-center">Not found  <b style={{color: "red"}}>404</b></h2>
            <Link className="text-center d-block" to="/">Asosiy sahifaga qaytish</Link>
        </div>
    );
}

export default Error;