import React from 'react'
import {Helmet} from 'react-helmet';
import {Header, Title, ContainerHeader, ContainerButtons} from './elements/Header';
import Button from './elements/Button';
import BtnLogout from './elements/BtnLogout'
import FormExpenses from './components/FormExpenses'
import BarTotalExpensed from './components/BarTotalExpensed';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Add Expense</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Add Expense</Title>
          <ContainerButtons>
            <Button to="/categories">Categories</Button>
            <Button to="/list">Expense list</Button>
            <BtnLogout />
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <FormExpenses />
      <BarTotalExpensed />
    </>
  )
}
