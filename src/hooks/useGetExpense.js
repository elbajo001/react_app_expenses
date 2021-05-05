import React, { useState, useEffect } from 'react';
import {db} from '../firebase/firebaseConfig';
import {useHistory} from 'react-router-dom'

const useGetExpense = (id) => {
    const history = useHistory();
    const [expense, setExpense] = useState('')
    
    useEffect(() => {
        db.collection('expenses').doc(id).get()
        .then((doc) => {
            if (doc.exists) setExpense(doc)
            else history.push('/list');
        })
    }, [id, history])

    return [expense];
}
 
export default useGetExpense;