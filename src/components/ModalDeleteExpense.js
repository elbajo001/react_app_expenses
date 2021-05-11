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
        setClose(!close);
        deleteExpense(id);
        setIsDeleted(true);
    }
    return ( 
        <>
            <ContainerModal>
                <ModalContent>
                    <ButtonIcon onClick={handleClose}><IconDelete /></ButtonIcon>
                    <h1>Delete Expense</h1>
                    <p>¿Sure you want to delete <b>{expense.inputDescription}</b>?</p>
                    <ModalButtons>
                        <ButtonActionCancel onClick={handleClose}>
                            No, cancel
                        </ButtonActionCancel>
                        <ButtonActionDelete onClick={() => handleDelete(expense.id) }>
                            Yes, delete
                        </ButtonActionDelete>
                    </ModalButtons>
                </ModalContent>
            </ContainerModal>
        </>
     );
}
 
export default ModalDeleteExpense;