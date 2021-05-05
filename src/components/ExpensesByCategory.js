import React from 'react'
import {Helmet} from 'react-helmet';
import {Header, Title, ContainerHeader, ContainerButtons} from './../elements/Header';
import BtnBackward from './../elements/BtnBackward';
import BarTotalExpensed from './BarTotalExpensed';
import useGetExpensesByMonth from '../hooks/useGetExpensesByMonth';

export default function ExpensesByCategory() {
    useGetExpensesByMonth();
    return (
        <>
            <Helmet>
                <title>Expenses by categories</title>
            </Helmet>
            <Header>
                <BtnBackward />
                <Title>Expenses by categories</Title>
            </Header>
            <BarTotalExpensed />
        </>
    )
}
