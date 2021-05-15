import React from 'react'
import {Helmet} from 'react-helmet';
import {Header, Title, ContainerHeader, ContainerButtons} from './../elements/Header';
import BtnBackward from './../elements/BtnBackward';
import BarTotalExpensed from './BarTotalExpensed';
import useGetExpensedByMonthByCategory from '../hooks/useGetExpensedByMonthByCategory'
import {ListOfCategories, ListCategoriesElement, Category, Amount} from '../elements/ListElements'
import CategoryIcon from '../elements/CategoryIcon'
import converToMoney from '../functions/convertToMoney'

export default function ExpensesByCategory() {
    const expensesByCategory = useGetExpensedByMonthByCategory();
    return (
        <>
            <Helmet>
                <title>Gastos por categorías</title>
            </Helmet>
            <Header>
                <BtnBackward />
                <Title>Gastos por categorías</Title>
            </Header>
            <ListOfCategories>
                {expensesByCategory.map((element, index) => {
                    return (
                        <ListCategoriesElement key={index}>
                            <Category>
                                <CategoryIcon id={element.category}/>
                                {element.category}
                            </Category>
                            <Amount>
                                {converToMoney(element.amount)}
                            </Amount>
                        </ListCategoriesElement>
                    );
                })}
            </ListOfCategories>
            <BarTotalExpensed />
        </>
    )
}
