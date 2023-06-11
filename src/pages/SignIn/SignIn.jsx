import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import styles from "./SignIn.module.css";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { v4 as uuid } from "uuid";


export const SignIn = () => {
  const [passwordType, setType] = useState("password");
  const [toggleIcon, setToggleIcon] = useState("visibility_off");
  const [myAddress, setMyAddress] = useState([]);
  const [isAddress, setIsAddress] = useState(false);
  const formData = useRef(null);
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

  const addAddress = async (addressDetails) => {
    const newAddress = { ...addressDetails, _id: uuid() }
    console.log(newAddress);
    const { data: { address } } = await axios.post("/api/user/address", { address: newAddress }, { headers: { authorization: localStorage.getItem("token") } });
    setMyAddress(address)
  }

  const addNewAddress = (e, dummy) => {
    e.preventDefault()
    try {

      if (dummy === "dummy") {
        const names = [
          'Aarav',
          'Diya',
          'Kiran',
          'Neha',
          'Rahul',
          'Sneha',
          'Vikram',
          'New Balak'
        ];
        var numbers = [];
        var randomnumber;
        do {
          randomnumber = Math.floor(Math.random() * 8)
        } while (numbers.includes(randomnumber));
        numbers.push(randomnumber);

        const addressVal = {
          name: names[randomnumber],
          house: "1245 Main Street",
          city: "Delhi",
          state: "Delhi",
          country: "India",
          postalCode: 110001,
          mobile: 7684378546
        }
        addAddress(addressVal);
        setIsAddress(false)
      }
      else {
        const formValues = [...new FormData(formData.current).entries()];
        let addressVal = {}
        formValues.forEach(([name, value]) => {
          if (value === "") return toast.error(`${name} is Empty`)
          if (name === "mobile" && value.length !== 10) return toast.error(`Enter valid moblie number`)
          if (name === "postalCode" && value.length !== 6) return toast.error(`Enter valid postal Code`)
          return addressVal = { ...addressVal, [name]: value }
        })
        console.log(addressVal);
        if (Object.keys(addressVal).length === 7) {
          addAddress(addressVal);
          setIsAddress(false)
        }
      }
    }
    catch (e) {
      toast.error("Name already exists!")
      console.log(e);
    }
  }

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

  const editAddress = () => {
    ///------------------------------------TO BER CONTINEBRisdbvkbaduovadkbadlbvkad------------------------------///
  }

  useEffect(() => {
    (async () => {
      try {
        const { data: { address } } = await axios.get("/api/user/address", { headers: { authorization: localStorage.getItem("token") } })
        setMyAddress(address);
      }
      catch (e) {
        console.log(e);
        toast.error("Something wrong In getting addresses")
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
                  const { name, house, city, state, country, postalCode, mobile } = item;
                  return (<li>
                    <p>{name}</p>
                    <p>#{house}, {city}, {state}, {country} - {postalCode} <br /> Mobile number: {mobile}</p>
                    {<div className={`${styles["btn-group"]}`}>
                      <button className="btn primary" onClick = {() => editAddress()}>edit</button>
                      <button className="btn warning" onClick={() => removeAddress(item)}>Remove</button>
                    </div>}
                  </li>)
                }
                )
              }
            </ul>
            <div className={`${styles["btn-group-last"]}`}>
              <button className={myAddress.length > 2 ? "btn secondary" : "btn primary"} onClick={() => setIsAddress(p => !p)} disabled={myAddress.length > 2}>Add new address</button>
              <div className={`${styles["add-new-address"]}`} style={{ display: isAddress ? "block" : "none" }}>
                <form ref={formData}>
                  <h2>Add New Address</h2>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your Name</label>
                    <input
                      type="text"
                      className="txt"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your House No.</label>
                    <input
                      type="text"
                      className="txt"
                      placeholder="House No., Flat, Building, Street"
                      name="house"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your City</label>
                    <input
                      type="text"
                      className="txt"
                      placeholder="City"
                      name="city"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your State</label>
                    <input
                      type="text"
                      className="txt"
                      placeholder="State"
                      name="state"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your Country</label>
                    <input
                      type="text"
                      className="txt"
                      placeholder="Country"
                      name="country"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your Postal Code</label>
                    <input
                      type="number"
                      className="txt"
                      placeholder="Postal Code"
                      name="postalCode"
                    />
                  </div>
                  <div className="input-grp">
                    <label htmlFor="email">Enter your Mobile Number</label>
                    <input
                      type="number"
                      className="txt"
                      placeholder="Mobile Number"
                      name="mobile"
                    />
                  </div>
                  <button className="btn warning" onClick={(e) => addNewAddress(e, "dummy")}>Add Dummy Data</button>
                  <input type="submit" value="Add Address" className="btn primary" onClick={(e) => addNewAddress(e)} />
                </form>
              </div>
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
