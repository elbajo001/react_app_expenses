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
            .where('date', '>=', varStartOfMonth)
            .where('date', '<=', varEndOfMonth)
            .where('user', '==', user.uid)
            .onSnapshot((snapshot) => {
                setExpenses(snapshot.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }))
            })
            return unsuscribe;
        }
    }, [user])

    return expenses;
}
 
export default useGetExpensesByMonth;