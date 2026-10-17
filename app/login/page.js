

'use client';


import React, { useState } from 'react';
import "./login.css"
import Spinner from '../dashboard/loading';
import NavigationBar from '../nav/page';

export default function Login() {

  


    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e){
            e.preventDefault();
            setLoading(true);
            setMessage("");

    
    // getting data form form
    const form = e.target;
    const user = form.username.value;
    const pass = form.password.value;




    try{
         let response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Must match @RequestBody
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });

    
            if(response.status != 202){
            setMessage("Error occurred while logging in")
        } else{
            setLoading(false)
            
            response =  await response.json();
            

           let token = response.token;

           localStorage.setItem('token',token);

            

            setMessage("Logged in..")
        }

    } catch(err){

       setMessage("couldn't logged in")

        

    } 

    }

  return (
    <>

<NavigationBar />

    <h1>Login Page</h1>
        <form onSubmit={handleSubmit} id = "login-form">

        
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>
      <br />

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
      <br />

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Login'}
      </button>
      <br />
      <br />

      {message && <p>{message}</p>}
    </form>
    </>
    

  );
}