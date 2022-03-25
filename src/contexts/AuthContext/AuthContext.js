import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value = "dfg">
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }