import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import {Header, Title, ContainerHeader, ContainerButtons} from './../elements/Header';
import Button from './../elements/Button';
import {Form, Input, ContainerButton} from './../elements/FormElements'
import {ReactComponent as SvgSignup} from './../imagenes/registro.svg'
import styled from 'styled-components'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'
import Alert from '../elements/Alert';

const Svg = styled(SvgSignup)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

export default function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pw2, setPw2] = useState('')
    const [stateAlert, setStateAlert] = useState(false)
    const [alert, setAlert] = useState({})

    const handleChange = (e) =>  {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPw(e.target.value);
                break;
            case 'password2':
                setPw2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStateAlert(false);
        setAlert({});

        //Comprobamos el correo electrónico sea válido
        const regexEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!regexEmail.test(email)) {
            setStateAlert(true);
            setAlert({
                type: 'error',
                msg: 'Por favor, ingresa un correo válido.'
            })
            return;
        }

        if (email === '' || pw === '' || pw2 === '') {
            setStateAlert(true);
            setAlert({
                type: 'error',
                msg: 'Por favor, completa todos los campos.'
            })
            return;
        }

        if (pw !== pw2) {
            setStateAlert(true);
            setAlert({
                type: 'error',
                msg: 'Las contraseñas no coinciden.'
            })
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, pw);
            history.push('/');
        } catch (error) {
            setStateAlert(true);

			let msg;
			switch(error.code){
				case 'auth/invalid-password':
					msg = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					msg = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					msg = 'El correo electrónico no es válido.'
				break;
				default:
					msg = 'Hubo un error al intentar crear la cuenta.'
				break;
			}

			setAlert({type: 'error', msg: msg});
        }
    }

    return (
        <>
            <Helmet>
                <title>Sign up</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Sign up</Title>
                    <div>
                        <Button to="/log-in">Log in</Button>
                    </div>
                </ContainerHeader>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={pw}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="repeat password"
                    value={pw2}
                    onChange={handleChange}
                />
                <ContainerButton>
                    <Button as="button" primario type="submit">Create Account</Button>
                </ContainerButton>
            </Form>
            <Alert 
                type={alert.type}
                msg={alert.msg}
                stateAlert={stateAlert}
                setStateAlert={setStateAlert}
            />
        </>
    )
}
