import React, { useRef } from 'react'
import styles from "./SignIn.module.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { toast } from "react-hot-toast";




export const AddressFields = ({ isAddress, setIsAddress, setMyAddress, isEdit, getId }) => {
    const formData = useRef(null);


    const addAddress = async (addressDetails) => {
        const newAddress = { ...addressDetails, _id: uuid() }
        try {
            const { data: { address } } = await axios.post("/api/user/address", { address: newAddress }, { headers: { authorization: localStorage.getItem("token") } });
            setMyAddress(address)
        } catch(e) {
            console.log(e)
        }
    }

    const editAddress = async (addressDetails) => {
        const newAddress = { ...addressDetails, _id: getId }
        try {
            const { data: { address } } = await axios.post("/api/user/edit/address", { address: newAddress }, { headers: { authorization: localStorage.getItem("token") } });
            setMyAddress(address)
        }
        catch(e) {
            console.log(e);
        }
    }

    const addNewAddress = (e, dummy) => {
        e.preventDefault()
        try {

            if (dummy === "dummy") {
                const { name, house, city, state, postalCode, mobile } = {
                    name: ['Aarav', 'Diya', 'Kiran', 'Neha', 'Rahul', 'Sneha', 'Vikram', 'New Balak'],
                    house: ["Ganga", "Taj", "Red Fort", "Mysore Palace", "Meenakshi Temple", "Golden Temple", "Gateway of India", "Hawa Mahal"],
                    city: ["Varanasi", "Agra", "Delhi", "Mysore", "Madurai", "Amritsar", "Mumbai", "Jaipur"],
                    state: ["Uttar Pradesh", "Andhra Pradesh", "Delhi", "Karnataka", "Tamil Nadu", "Punjab", "Maharashtra", "Rajasthan",],
                    postalCode: ["221001", "282001", "110006", "570001", "625001", "143006", "400001", "302002"],
                    mobile: ["9876543210", "9876543211", "9876543212", "9876543213", "9876543214", "9876543215", "9876543216", "9876543217"],
                };

                var numbers = [];
                var randomnumber;
                do {
                    randomnumber = Math.floor(Math.random() * 8)
                } while (numbers.includes(randomnumber));
                numbers.push(randomnumber);
                const addressVal = {
                    name: name[randomnumber],
                    house: house[randomnumber],
                    city: city[randomnumber],
                    state: state[randomnumber],
                    country: "India",
                    postalCode: postalCode[randomnumber],
                    mobile: mobile[randomnumber]
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
