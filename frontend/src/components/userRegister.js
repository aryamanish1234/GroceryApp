import { useState } from  "react";
import React from 'react';
import {auth} from '../firebase'
import  { useHistory } from 'react-router-dom';
export function Register() {
    const [email, updateEmailText] = useState(" ");
    const [password, updatepasswordText] = useState(" ");
    const [confirmpassword, updateconfirmpasswordText] = useState("");
    const histroy = useHistory();
    //console.log("eamil", email, "password", password, "confirmpassword", confirmpassword)
   async function handleRegister() {
       if(password === confirmpassword){
         const { user }  =  await auth.createUserWithEmailAndPassword(email, password);
           // console.log("UserData", user);
            localStorage.setItem("userToken", user.refreshToken)
            histroy.push("/home");
        }else {
           alert("Password Not match")
       }
   }

    return (
    <div className ="w-100">
      <h1>Hello Register Here</h1>

      <div className="w-50 m-auto  from-element-container"> 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value = {email}
            onChange={(e) => updateEmailText(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1 mt-3">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value = {password}
            onChange = {(e)=> updatepasswordText(e.target.value)}

          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1 mt-3"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value = {confirmpassword}
            onChange = {(e)=> updateconfirmpasswordText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick= {()=> handleRegister()}>
          Submit
        </button>
      </div>
    </div>
  );
}
