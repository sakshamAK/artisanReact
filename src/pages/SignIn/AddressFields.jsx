import React, { useRef } from 'react'
import styles from "./SignIn.module.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { toast } from "react-hot-toast";




export const AddressFields = ({ isAddress, setIsAddress, setMyAddress, isEdit, getId }) => {
    const formData = useRef(null);


    const addAddress = async (addressDetails) => {
        const newAddress = { ...addressDetails, _id: uuid() }
        console.log(newAddress);
        const { data: { address } } = await axios.post("/api/user/address", { address: newAddress }, { headers: { authorization: localStorage.getItem("token") } });
        setMyAddress(address)
    }

    const editAddress = async (addressDetails) => {
        const newAddress = {...addressDetails, _id: getId}
        const { data: { address } } = await axios.post("/api/user/edit/address", { address: newAddress }, { headers: { authorization: localStorage.getItem("token") } });
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
                isEdit ? editAddress(addressVal) : addAddress(addressVal);
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
                    isEdit ? editAddress(addressVal) : addAddress(addressVal);
                    setIsAddress(false)
                }
            }
        }
        catch (e) {
            toast.error("Name already exists!")
            console.log(e);
        }
    }
    return (
        <div className={`${styles["add-new-address"]}`} style={{ display: isAddress ? "block" : "none" }}>
            <button className="btn secondary" onClick={() => setIsAddress(false)}>Close</button>
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
    )
}
