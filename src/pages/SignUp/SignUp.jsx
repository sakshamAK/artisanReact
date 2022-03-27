import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../SignIn/SignIn.module.css"

export const SignUp = () => {
    const [passwordType, setType] = useState("password");
    const [rePasswordType, setReType] = useState("password");
    const [toggleIcon, setToggleIcon] = useState("visibility_off");
    const [toggleReIcon, setToggleReIcon] = useState("visibility_off");
    const togglePassword = () => {
        if (passwordType === "password") {
            setType("text")
            setToggleIcon("visibility")
        }
        else {
            setType("password")
            setToggleIcon("visibility_off")
        }
    }

    const toggleRePassword = () => {
        if (rePasswordType === "password") {
            setReType("text")
            setToggleReIcon("visibility")
        }
        else {
            setReType("password")
            setToggleReIcon("visibility_off")
        }
    }
    return (
        <div className={`${styles.signinForm}`}>
            <div className={`${styles.loginBanner}`}>
                <h1>Sign Up</h1>
                <p>Looks like you're new here! Sign up with your email to get started</p>
            </div>
            <form className={`${styles.formContainer} form-grp`}>
                <div className="input-grp">
                    <label htmlFor="email">Enter your email *</label>
                    <input type="email" className="txt" placeholder="Email" name="email" />
                </div>
                <div className="input-grp">
                    <label htmlFor="Firstname">Enter your Firstname *</label>
                    <input type="text" className="txt" placeholder="First name" name="Firstname" />
                </div>
                <div className="input-grp">
                    <label htmlFor="Lastname">Enter your Lastname *</label>
                    <input type="text" className="txt" placeholder="Last name" name="Lastname" />
                </div>
                <div className="input-grp">
                    <label htmlFor="new password">Enter your new password *</label>
                    <input type={passwordType} className="pwd" placeholder="New Password" name="new password" />
                    <i className={`${styles.passwordVisibility} material-icons`} onClick={() => togglePassword()} >{toggleIcon}</i>
                </div>
                <div className="input-grp">
                    <label htmlFor="confirm password">Re-enter your new password *</label>
                    <input type={rePasswordType} className="pwd" placeholder="Confirm Password" name="confirm password" />
                    <i className={`${styles.passwordVisibility} material-icons`} onClick={() => toggleRePassword()} >{toggleReIcon}</i>
                </div>
                <input type="submit" value="Sign Up" className="btn primary" />
                <div className={`${styles.signup}`}>Already have an account? <Link to="/signin">Sign In</Link></div>
            </form>
        </div>
    )
}
