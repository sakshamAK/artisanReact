import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./SignIn.module.css"
import { useState } from 'react'
import axios from "axios"

export const SignIn = () => {
    
    const [ email, setMail ] = useState("adarshbalika@gmail.com")
    const [ password, setPassword ] = useState("adarshbalika")
    const validateData = {
        "email": "",
        "password":""
    }
    
    const setCredentials = async e => {
        e.preventDefault();
        setMail("adarshbalika@gmail.com")
        setPassword("adarshbalika")

        validateData.email = email;
        validateData.password = password;
        const res = await axios.post("/api/auth/login", JSON.stringify(validateData));
        const token = await res.data.encodedToken
        console.log(token)
        
        const headers = {
            headers: {
                "authorization": token
            }
        }
        const res2 = await axios.get("api/user/cart", headers);
        console.log(res2)
    }

    return (
        <div className={`${styles.signinForm}`}>
            <div className={`${styles.loginBanner}`}>
                <h1>Sign In</h1>
                <p>Get Access To Your Cart, Wishlist And Orders</p>
            </div>
            <form className={`${styles.formContainer} form-grp`}>
                <div className="input-grp">
                    <label htmlFor="email">Enter your email *</label>
                    <input type="text" className="txt" placeholder="Email" name="email" value={email} onChange = { e => setMail(e.target.value)} />
                </div>
                <div className="input-grp">
                    <label htmlFor="password">Enter your password *</label>
                    <input type="Password" className="pwd" placeholder="Password" name="password" value={password} onChange = { e => setPassword(e.target.value)} />
                    <Link to="/forgotPassword" className={`${styles.forgotPassword}`}>Forgot Password?</Link>
                </div>
                <input type="submit" value="Test User" className="btn warning" onClick = {e => setCredentials(e)} />
                <input type="submit" value="Sign In" className="btn primary" />
                <div className={`${styles.signup}`}>Don't have an account? <Link to="/signup">Sign Up</Link></div>
            </form>
        </div>
    )
}
