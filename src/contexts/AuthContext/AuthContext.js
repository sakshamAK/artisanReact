import { createContext, useContext, useState } from "react";
import axios from "axios"

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [email, setMail] = useState("adarshbalika@gmail.com")
    const [password, setPassword] = useState("adarshbalika")
    const [err, setErr] = useState("");
    const isAuth = token => token ? true : false

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
            const token = await res.data.encodedToken
            isAuth(token);
        }
        
        catch (e) {
            errorToast(e)
        }
    }
    // const headers = {
    //     headers: {
    //         "authorization": token
    //     }
    // }

    // const res2 = await axios.get("api/user/cart", headers);

    return (
        <AuthContext.Provider value={{ setCredentials, email, password, setMail, setPassword, err, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }