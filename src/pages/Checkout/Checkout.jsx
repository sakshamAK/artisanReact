import React, { useEffect, useState } from 'react'
import style from "./Checkout.module.css"
import axios from "axios"
import { OrderSummary } from './OrderSummary';
import { priceCalculator } from '../../utils/priceCalculator';
import { useCart } from '../../contexts/CartContext/CartContext';


export const Checkout = () => {
    const [myAddress, setMyAddress] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState();
    const [payment, setPayment] = useState(false);
    const { state: { mycart } } = useCart();
    const { price, checkoutPrice, totalDiscount } = priceCalculator(mycart);
    const [order, setOrder] = useState({});


    useEffect(() => {
        (
            async () => {
                const { data: { address } } = await axios.get("/api/user/address", { headers: { authorization: localStorage.getItem("token") } })
                setMyAddress(address);
                setSelectedAddress(address[0])
            }
        )();
    }, [])
    return (
        <>
            <div className={`${style["checkout"]}`}>
                <div className={`${style["checkout-card"]}`}>
                    <div className={`${style["checkout-address-list"]}`}>
                        {payment && (<h1 className={`${style["order-placed"]}`}>Your Order Has Been Placed!!</h1>)}
                        {!payment && <h1>Select Address</h1>}
                        {
                            !payment && myAddress?.map(({ _id, name, house, city, state, country, postalCode, mobile }) => (
                                <label htmlFor={_id} className={`${style["checkout-address"]}`}>
                                    <div className={`${style["checkout-address-radio"]}`}>
                                        <input
                                            type="radio"
                                            id={_id}
                                            value={selectedAddress?._id}
                                            name="address"
                                            onClick={() => setSelectedAddress({ _id, name, house, city, state, country, postalCode, mobile })}
                                        />
                                        <h3>{name}</h3>
                                    </div>
                                    <p>#{house}, {city}, {state}, {country} - {postalCode} <br /> Mobile number: {mobile}</p>
                                </label>
                            ))
                        }
                    </div>
                    {
                        !payment ? 
                        <OrderSummary 
                            selectedAddress={selectedAddress} 
                            payment={payment} 
                            setPayment={setPayment} 
                            mycart={mycart} 
                            price={price} 
                            totalDiscount={totalDiscount} 
                            checkoutPrice={checkoutPrice} 
                            setOrder={setOrder}
                        /> :
                        <OrderSummary 
                            selectedAddress={order?.delivery} 
                            payment={payment}
                            setPayment={setPayment} 
                            mycart={order?.products} 
                            price={""} 
                            totalDiscount={""} 
                            checkoutPrice={order?.amount} 
                            setOrder={setOrder}
                        />
                    }
                </div>
            </div>
        </>
    )
}
