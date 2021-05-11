import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import {Header, Title, ContainerHeader, ContainerButtons} from './../elements/Header';
import Button from './../elements/Button';
import {Form, Input, ContainerButton} from './../elements/FormElements'
import {ReactComponent as SvgLogin} from './../imagenes/login.svg'
import styled from 'styled-components'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'
import Alert from './../elements/Alert'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.50rem; /* 200px */
    margin-bottom: 1.25rem; /* 20px */
`;


export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
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
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStateAlert(false);
        setAlert({});

        const regexEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!regexEmail.test(email)) {
            setStateAlert(true);
            setAlert({
                type: 'error',
                msg: 'Please, enter a valid email .'
            })
            return;
        }

        if (email === '' || pw === '') {
            setStateAlert(true);
            setAlert({
                type: 'error',
                msg: 'Please, complete all fields.'
            })
            return;
        }
        
        try {
            await auth.signInWithEmailAndPassword(email, pw);
            history.push('/');
        } catch (error) {
            setStateAlert(true);

            let msg;
			switch(error.code){
                case 'auth/wrong-password':
					msg = 'Incorrect password.'
					break;
				case 'auth/user-not-found':
					msg = 'No account was found with this email.'
					break;
				default:
					msg = 'An error has ocurred trying to enter.'
				    break;
			}

			setAlert({type: 'error', msg: msg});
        }
    }

    return (
        <>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Log in</Title>
                    <div>
                        <Button to="/sign-up">Sign up</Button>
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
                <ContainerButton>
                    <Button as="button" primario type="submit">Login</Button>
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
