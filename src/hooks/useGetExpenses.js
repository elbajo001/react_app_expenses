import { useState, useEffect } from 'react';
import {db} from '../firebase/firebaseConfig';
import {useAuth} from '../contexts/AuthContext';
import { getDaysInMonth } from 'date-fns';

const useGetExpenses = () => {
    const {user} = useAuth();
    const [expenses, setExpenses] = useState([]);
    const [lastExpense, setLastExpense] = useState(null);
    const [thereIsMoreToLoading, setThereIsMoreToLoading] = useState(false);
    

    const getMoreExpenses = () => {
        db.collection('expenses')
        .where('user', '==', user.uid)
        .orderBy('date', 'desc')
        .limit(10)
        .startAfter(lastExpense)
        .onSnapshot((snapshot) => {
            if(snapshot.docs.length > 0) {
                setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
                setExpenses(expenses.concat(snapshot.docs.map((expense) => {
                    return {...expense.data(), id: expense.id}
                })))
            } else setThereIsMoreToLoading(false);
        })


    }

    useEffect(() => {
        const unsuscribe = db.collection('expenses')
        .where('user', '==', user.uid)
        .orderBy('date', 'desc')
        .limit(10)
        .onSnapshot((snapshot) => {
            if (snapshot.docs.length > 0) {
                setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
                setThereIsMoreToLoading(true);
            } else setThereIsMoreToLoading(false);
            setExpenses(snapshot.docs.map((expense) => {
                return {...expense.data(), id: expense.id}
            }))
        });

        return unsuscribe;
    }, [user]);

    return [expenses, getMoreExpenses, thereIsMoreToLoading];
}
 
export default useGetExpenses;