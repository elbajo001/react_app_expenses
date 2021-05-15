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
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Agregar Gasto</Title>
          <ContainerButtons>
            <Button to="/categories">Categorías</Button>
            <Button to="/list">Lista de Gastos</Button>
            <BtnLogout />
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <FormExpenses />
      <BarTotalExpensed />
    </>
  )
}
