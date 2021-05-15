import React, { useState, useEffect } from 'react';
import {ReactComponent as IconDelete} from '../imagenes/borrar.svg';
import deleteExpense from '../firebase/deleteExpense'
import {
    ContainerModal,
    ModalContent,
    ButtonIcon,
    ModalButtons,
    ButtonActionDelete,
    ButtonActionCancel
} from '../elements/ModalElements'

const ModalDeleteExpense = ({close, setClose, expense, setIsDeleted}) => {
    const handleClose = () => {
        setClose(!close);
    }

    const handleDelete = (id) => {
        deleteExpense(id);
        setClose(!close);
        setIsDeleted(true);
    }
    return ( 
        <>
            <ContainerModal>
                <ModalContent>
                    <ButtonIcon onClick={handleClose}><IconDelete /></ButtonIcon>
                    <h1>Eliminar gasto</h1>
                    <p>¿Estás seguro que quieres eliminar <b>{expense.inputDescription}</b> de tus gastos?</p>
                    <ModalButtons>
                        <ButtonActionCancel onClick={handleClose}>
                            No, cancelar
                        </ButtonActionCancel>
                        <ButtonActionDelete onClick={() => handleDelete(expense.id) }>
                            Sí, eliminar
                        </ButtonActionDelete>
                    </ModalButtons>
                </ModalContent>
            </ContainerModal>
        </>
     );
}
 
export default ModalDeleteExpense;