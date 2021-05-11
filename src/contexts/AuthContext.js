import React, { useContext, useEffect, useState } from 'react'
import {auth} from './../firebase/firebaseConfig'

const AuthContext = React.createContext();
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
	const [loading, setLoading] = useState(true);
    useEffect(() => {
        const cancelSuscription = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })
        return cancelSuscription;
    }, [])

    return (
        <AuthContext.Provider value={{user: user}}>
			{!loading && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext, useAuth}