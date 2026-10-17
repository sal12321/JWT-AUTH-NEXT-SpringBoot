"use client";
import { useState } from "react";
import "./pages.css"
import NavigationBar from "../nav/page";

export default function CheckAuth() {
  const [message, setMessage] = useState("");
  const API_URL = process.env.API_URL;

  async function handleSubmit(apiType) {
    setMessage("calling the api...");

    if (apiType === "public") {
      try {
        const response = await fetch(`${API_URL}/public/hello`, {
          method: "GET",
        });
        console.log(response);

        if (response.ok ) // ACCEPTED
         {
           
          // Convert object to string:
          const message = response.text();
                      


          setMessage(message);
                      
        } else {
          setMessage("in else");
        }
      } catch (err) {
        setMessage("error occurred");
      }
    } else {

        const token = localStorage.getItem('token');

      const response = await fetch(`${API_URL}/me`, {
        method: "GET",
        headers: {
        'Authorization': `Bearer ${token}` // if authenticated
      }
      });

      if(response.status == 202){
        setMessage("Your are authenticated... ")
      }
      else {
        setMessage("This is an authenticated route, you need to log in first.")
      }
    }
  }

  return (
    <>

    <NavigationBar />
    
      <div className="container">

        <div className="buttons">
        <button onClick={() => handleSubmit("public")}>PUBLIC API</button>
        <button onClick={()=> handleSubmit("private")}>AUTHENTICATED API</button>
        </div>

        <div className="messageBox">
        <div className="message">{message}</div>
      </div>
      </div>

    </>
  );
}
