import React,{useEffect} from 'react'
import {Redirect} from 'react-router-dom'
export default function Logout() {
    useEffect(() => {
       localStorage.removeItem('token');
    }, [])
    return (
        <div>
            <Redirect to='/login' />;
           
        </div>
    )
}
