import React, { useContext, useEffect, useState } from 'react'
import {auth} from './../firebase/firebaseConfig'

const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    // Creamos un state para saber cuando termina de 
	// cargar la comprobacion de onAuthStateChanged
	const [loading, setLoading] = useState(true);

    //efecto para ejecutar la comprobación una sola vez
    useEffect(() => {
        //comprobamos si hay un usuario
        const cancelSuscription = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })
        return cancelSuscription;
    }, [])

    return (
        <AuthContext.Provider value={{user: user}}>
            {/* Solamente retornamos los elementos hijos cuando no este cargando. 
			De esta forma nos aseguramos de no cargar el resto de la app hasta que el usuario haya sido establecido.
			
			Si no hacemos esto al refrescar la pagina el componente children intenta cargar inmediatamente, 
			antes de haber comprobado que existe un usuario. */}
			{!loading && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext, useAuth}