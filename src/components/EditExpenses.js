import React from 'react'
import {Helmet} from 'react-helmet';
import {Header, Title, ContainerHeader, ContainerButtons} from './../elements/Header';
import BtnBackward from './../elements/BtnBackward';
import BarTotalExpensed from './BarTotalExpensed';
import FormExpenses from './FormExpenses';
import {useParams} from 'react-router-dom';
import useGetExpense from '../hooks/useGetExpense';

export default function EditExpenses() {
    const {id} = useParams();
    const [expense] = useGetExpense(id);
    return (
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>
            <Header>
                <BtnBackward ruta={"/list"}/>
                <Title>Editar Gasto</Title>
            </Header>
            <FormExpenses expense={expense}/>
            <BarTotalExpensed />
        </>
    )
}
