import React from 'react'
import {ReactComponent as IconLogout} from './../imagenes/log-out.svg'
import Button from './Button'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'

const BtnLogout = () => {
    const history = useHistory();
    const handleLogout = async () => {
        try {
            await auth.signOut();
            history.push('/log-in')
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <Button iconBig as="button" onClick={handleLogout}>
            <IconLogout />
        </Button>
    )
}

export default BtnLogout;