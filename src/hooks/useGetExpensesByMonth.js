import React, { useState, useEffect } from 'react';
import {db} from '../firebase/firebaseConfig';
import {startOfMonth, endOfMonth, getUnixTime} from 'date-fns'
import {useAuth} from '../contexts/AuthContext'

const useGetExpensesByMonth = () => {
    const [expenses, setExpenses] = useState([])
    const {user} = useAuth();

    useEffect(() => {
        const varStartOfMonth = getUnixTime(startOfMonth(new Date()));
        const varEndOfMonth = getUnixTime(endOfMonth(new Date()));
        if (user) {
            const unsuscribe = db.collection('expenses')
            .orderBy('date', 'desc')
            //Obtiene los gastos entre el rango desde el inicio de mes hasta el fin de mes
            .where('date', '>=', varStartOfMonth)
            .where('date', '<=', varEndOfMonth)
            .where('user', '==', user.uid)
            .onSnapshot((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    setExpenses(snapshot.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    }))
                })
            })
            // UseEffect tiene que retornar una función que se va a ejecutar cuando se desmonte el componente
            // En este caso, queremos que se ejecute unsuscribe a la colección de firestore
            return unsuscribe;
        }
    }, [user])

    return expenses;
}
 
export default useGetExpensesByMonth;