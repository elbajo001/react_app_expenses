import React, { useState, useEffect } from 'react'
import {
    Form, ContainerFilters, Input, InputBig, ContainerButton
} from './../elements/FormElements'
import Button from './../elements/Button'
import {ReactComponent as IconPlus} from './../imagenes/plus.svg'
import SelectCategory from './SelectCategory'
import DatePicker from './DatePicker'
import addExpense from '../firebase/addExpense'
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'
import {useAuth} from '../contexts/AuthContext'
import Alert from './../elements/Alert'
import {useHistory} from 'react-router-dom'
import editExpense from '../firebase/editExpense'

const FormExpenses = ({expense}) => {
    const [inputDescription, setInputDescription] = useState('')
    const [inputAmount, setInputAmount] = useState('') 
    const [category, setCategory] = useState('hogar')
    const [date, setDate] = useState(new Date())
    const {user} = useAuth();
    const [stateAlert, setStateAlert] = useState(false)
    const [alert, setAlert] = useState({})
    const history = useHistory()
    
    useEffect(() => {
        // Comprobamos si ya hay algun gasto.
		// De ser asi establecemos todo el state con los valores del gasto.
		if(expense){
			// Comprobamos que el gasto sea del usuario actual.
			// Para eso comprobamos el uid guardado en el gasto con el uid del usuario.
            if(expense.data().user === user.uid) {
                setCategory(expense.data().category);
                setDate(fromUnixTime(expense.data().date));
                setInputDescription(expense.data().inputDescription);
                setInputAmount(expense.data().inputAmount);
            } else history.push('/list');
        }
    }, [expense, user, history])

    const handleChange = (e) => {
        if (e.target.name === 'description') {
            setInputDescription(e.target.value);
        } else if (e.target.name === 'amount') {
            setInputAmount(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Se formatea el número en float con 2 decimales
        let amountFormat = parseFloat(inputAmount).toFixed(2);
        let dateFormat = getUnixTime(date);
        // Comprobamos que haya descripción y valor
        if (inputDescription !== '' && inputAmount !== '') {
            if (amountFormat) {
                if (expense) {
                    editExpense({
                        id: expense.id,
                        category: category, 
                        description: inputDescription,
                        amount: amountFormat,
                        date: dateFormat,
                    })
                    .then(() => {history.push('/list')})
                } else {
                    addExpense({
                        category: category, 
                        description: inputDescription,
                        amount: amountFormat,
                        date: dateFormat,
                        uidUser: user.uid
                    })
                    .then(() => {
                        setCategory('hogar');
                        setInputAmount('');
                        setInputDescription('');
                        setDate(new Date());

                        setStateAlert(true);
                        setAlert({type: "exito", msg: "Expenses added correctly."});    
                    })
                    .catch((error) => {
                        setStateAlert(true);
                        setAlert({type: "error", msg: "An error has occurred."});    
                    })
                }
            } else {
                setStateAlert(true);
                setAlert({type: "error", msg: "Invalid amount."});
            }
        } else {
            setStateAlert(true);
            setAlert({type: "error", msg: "Please, complete all fields."});
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <ContainerFilters>
                <SelectCategory
                    category={category}
                    setCategory={setCategory}
                />
                <DatePicker
                    date={date}
                    setDate={setDate}
                />
            </ContainerFilters>
            <div>
                <Input 
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={inputDescription}
                    onChange={handleChange}
                />
                <InputBig 
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="0.00"
                    value={inputAmount}
                    onChange={handleChange}
                />
            </div>
            <ContainerButton>
                <Button as="button" primario conIcono>
                    {expense ? 'Edit Expense' : 'Add Expense'} <IconPlus />
                </Button>
            </ContainerButton>
            <Alert
                type={alert.type}
                msg={alert.msg}
                stateAlert={stateAlert}
                setStateAlert={setStateAlert}
            />
        </Form>
    )
}

export default FormExpenses
