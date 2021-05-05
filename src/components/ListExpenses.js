import React, { useState, useEffect } from 'react'
import {Helmet} from 'react-helmet';
import {Header, Title} from './../elements/Header';
import BtnBackward from './../elements/BtnBackward';
import BarTotalExpensed from './BarTotalExpensed';
import useGetExpenses from '../hooks/useGetExpenses';
import {
    List,
    ListElement,
    Category,
    Description,
    Amount,
    Date,
    ContainerButton,
    ButtonAction,
    ButtonLoadingMore,
    ContainerCentralButton,
    ContainerSubtitle,
    Subtitle
} from '../elements/ListElements'
import CategoryIcon from '../elements/CategoryIcon'
import convertToMoney from '../functions/convertToMoney'
import {ReactComponent as IconEdit} from '../imagenes/editar.svg'
import {ReactComponent as IconDelete} from '../imagenes/borrar.svg'
import {Link} from 'react-router-dom'
import Button from '../elements/Button'
import {format, fromUnixTime} from 'date-fns'
import {es} from 'date-fns/locale'
import ModalDeleteExpense from './ModalDeleteExpense';
import Alert from '../elements/Alert'

export default function ListExpenses() {
    const [expenses, getMoreExpenses, thereIsMoreToLoading] = useGetExpenses();
    const [close, setClose] = useState(true);
    const [varExpense, setExpense] = useState('');
    const [stateAlert, setStateAlert] = useState(false)
    const [alert, setAlert] = useState({})
    const [isDeleted, setIsDeleted] = useState(false)
    
    const handleDelete = (expense) => {
        setExpense(expense);
        setClose(!close);
    }

    useEffect(() => {
        if(isDeleted) {
            setStateAlert(true);
            setAlert({type: "exito", msg: "Expense deleted correctly."});
            setIsDeleted(false);
        }
    }, [isDeleted, setIsDeleted])
    
    const formatDate = (date) => {
        return format(fromUnixTime(date), "dd 'de' MMMM 'de' yyyy", {locale: es});
    }
    const dataIsEqual = (expenses, index, expense) => {
        if(index !== 0){
            const dateCurrent = formatDate(expense.date);
            const datePrevious = formatDate(expenses[index-1].date);
            return dateCurrent === datePrevious
        }
    }
    
    return (
        <>
            <Helmet>
                <title>Expense list</title>
            </Helmet>
            <Header>
                <BtnBackward />
                <Title>Expense list</Title>
            </Header>
            <List>
                {expenses.map((expense, index) => {
                    return (
                        <div key={expense.id}>
                            {!dataIsEqual(expenses, index, expense) && <Date>{formatDate(expense.date)}</Date>}
                            <ListElement key={expense.id}>
                                <Category >
                                    <CategoryIcon id={expense.category} />
                                    {expense.category}
                                </Category>
                                <Description >
                                    {expense.inputDescription}
                                </Description>
                                <Amount >
                                    {convertToMoney(expense.inputAmount)}
                                </Amount>
                                <ContainerButton>
                                    <ButtonAction as={Link} to={`/edit/${expense.id}`}>
                                        <IconEdit />
                                    </ButtonAction>
                                    <ButtonAction onClick={() => handleDelete(expense)}>
                                        <IconDelete />
                                    </ButtonAction>
                                    {!close && 
                                        (<ModalDeleteExpense 
                                            close={close}
                                            setClose={setClose}
                                            expense={varExpense}
                                            setIsDeleted={setIsDeleted}
                                        />)
                                    }
                                </ContainerButton>
                            </ListElement>
                        </div>
                    )
                })}
                {thereIsMoreToLoading &&
                    <ContainerCentralButton>
                        <ButtonLoadingMore onClick={() => getMoreExpenses()}>Show more</ButtonLoadingMore>
                    </ContainerCentralButton>
                }
                {expenses.length === 0 &&
                    <ContainerSubtitle>
                        <Subtitle>No expenses to show.</Subtitle>
                        <Button as={Link} to='/'>Add Expense</Button>
                    </ContainerSubtitle>
                }
            </List>
            <Alert 
                type={alert.type}
                msg={alert.msg}
                stateAlert={stateAlert}
                setStateAlert={setStateAlert} 
            />
            <BarTotalExpensed />
        </>
    )
}
