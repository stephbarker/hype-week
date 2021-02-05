import React from 'react'
import "../css/Login.css";
import { loginUrl } from '../config/spotify';

function Login() {
    return (
        <div className='login'>
             <a href={loginUrl}><h1>H y p e &nbsp; W e e k</h1></a>  
        </div>
    );
}

export default Login;