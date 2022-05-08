import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [email, setMail] = useState("adarshbalika@gmail.com")
    const [password, setPassword] = useState("adarshbalika")
    const [err, setErr] = useState("");
    const [isAuth, setAuth] = useState(localStorage.getItem("token") ? true : false);

    useEffect(() => {
        localStorage.getItem("token") ? setAuth(true) : setAuth (false);
    },[isAuth])

    const errorToast = message => {
        const delay = 1500

        setErr(message)
        setTimeout(() => setErr(""), delay)
    }

    //set Credentials and return token
    const setCredentials = async e => {
        e.preventDefault();

        let validateData = {
            email: "",
            password: ""
        }

        if (e.target.value === "Test User") {
            validateData = {
                ...validateData,
                email: "adarshbalika@gmail.com",
                password: "adarshbalika"
            }
        }

        if (e.target.value === "Sign In") {
            validateData = {
                ...validateData,
                email: email,
                password: password
            }
        }

        try {
            const res = await axios.post("/api/auth/login", JSON.stringify(validateData));
            localStorage.setItem("token", await res.data.encodedToken);
            setAuth(true);
            const headers = {
                headers: {
                    "authorization": localStorage.getItem("token")
                }
            }

            const getCartData = async () => await axios.get("api/user/cart", headers);
            console.log(getCartData())
        }

        catch (e) {
            errorToast(e)
        }
    }
    return (
        <AuthContext.Provider value={{ setCredentials, email, password, setMail, setPassword, err, isAuth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }