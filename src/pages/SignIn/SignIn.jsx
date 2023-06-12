import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import styles from "./SignIn.module.css";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { AddressFields } from "./AddressFields";


export const SignIn = () => {
  const [passwordType, setType] = useState("password");
  const [toggleIcon, setToggleIcon] = useState("visibility_off");
  const [myAddress, setMyAddress] = useState([]);
  const [isAddress, setIsAddress] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [getId, setId] = useState(undefined);
  const { setCredentials, email, setMail, setPassword, password, isAuth, setAuth } =
    useAuth();
  const navigate = useNavigate();
  const togglePassword = () => {
    if (passwordType === "password") {
      setType("text");
      setToggleIcon("visibility");
    } else {
      setType("password");
      setToggleIcon("visibility_off");
    }
  };

  const removeAddress = async (deleteAddress) => {
    try {
      const { data: { address } } = await axios.delete("/api/user/address", { headers: { authorization: localStorage.getItem("token") }, data: { address: deleteAddress } })
      console.log(deleteAddress);
      setMyAddress(address);
    }
    catch (e) {
      toast.error("Could not Delete Address. Something's wrong!")
      console.log(e);
    }
  }

  const editAddress = (_id) => {
    setIsEdit(true);
    setIsAddress(p => !p)
    setId(_id)
  }

  useEffect(() => {
    (async () => {
      try {
        const { data: { address } } = await axios.get("/api/user/address", { headers: { authorization: localStorage.getItem("token") } })
        setMyAddress(address);
      }
      catch (e) {
        console.log(e);
      }
    })();
  }, [])

  return (
    <div className={`${styles.signinForm}`}>
      <Toaster />
      <div className={`${styles.loginBanner}`}>
        {isAuth ?
          <div className={`${styles["addressManagement"]}`}>
            <h2>Address Management</h2>
            <ul>
              {
                myAddress?.map((item) => {
                  const { _id, name, house, city, state, country, postalCode, mobile } = item;
                  return (<li className={`${styles["li-address"]}`}>
                    <p>{name}</p>
                    <p>#{house}, {city}, {state}, {country} - {postalCode} <br /> Mobile number: {mobile}</p>
                    {name !== "Adarsh Balika" && <div className={`${styles["btn-group"]}`}>
                      <button className="btn primary" onClick={() => editAddress(_id)}>edit</button>
                      <button className="btn warning" onClick={() => removeAddress(item)}>Remove</button>
                    </div>}
                  </li>)
                }
                )
              }
            </ul>
            <div className={`${styles["btn-group-last"]}`}>
              <button className={myAddress.length > 2 ? "btn secondary" : "btn primary"} onClick={() => { setIsAddress(p => !p); setIsEdit(false) }} disabled={myAddress.length > 2}>Add new address</button>

              <AddressFields isAddress={isAddress} setIsAddress={setIsAddress} setMyAddress={setMyAddress} isEdit={isEdit} getId={getId} />

            </div>
          </div> :
          <>
            <h1>Sign In</h1>
            <p>Get Access To Your Cart, Wishlist And Orders</p>
          </>
        }
      </div>
      {isAuth ? (
        <div>
          <h1>You are logged in!</h1>
          <button className={`${styles.logoutBtn} btn primary`} onClick={() => {
            localStorage.removeItem("token");
            setAuth(false);
          }}>Logout</button>
        </div>
      ) : (
        <form className={`${styles.formContainer} form-grp`}>
          <div className="input-grp">
            <label htmlFor="email">Enter your email *</label>
            <input
              type="text"
              className="txt"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Enter your password *</label>
            <input
              type={passwordType}
              className="pwd"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <i
              className={`${styles.passwordVisibility} material-icons`}
              onClick={() => togglePassword()}
            >
              {toggleIcon}
            </i>
            <Link to="/forgotPassword" className={`${styles.forgotPassword}`}>
              Forgot Password?
            </Link>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="btn primary"
            onClick={(e) => {
              setCredentials(e);
              if (isAuth) navigate("/");
            }}
          />
          <input
            type="submit"
            value="Test User"
            className="btn primary"
            onClick={(e) => {
              setCredentials(e);
              if (isAuth) navigate("/");
            }}
          />
          <div className={`${styles.signup}`}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      )}
    </div>
  );
};
