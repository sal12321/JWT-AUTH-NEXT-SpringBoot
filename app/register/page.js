

'use client';


import React, { useState } from 'react';
import "./register.css"
import Spinner from '../dashboard/loading';
import NavigationBar from '../nav/page';

export default function Register() {


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
         const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Must match @RequestBody
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });



      console.log(response);
    
            if(response.status != 201){
            setMessage("Error occurred while creating account")

      } else{
setMessage("Account was created")
      }

    } catch(err){

        setMessage("Error occurred while creating account")  ;    

    } 

    }

  return (
    <>
<NavigationBar />
    <h1>Registry Page</h1>
        <form onSubmit={handleSubmit} id = "register-form">

        
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
        {loading ? 'Submitting...' : 'Register'}
      </button>
      <br />
      <br />

      {message && <p>{message}</p>}
    </form>
    </>
    

  );
}