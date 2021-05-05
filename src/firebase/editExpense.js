import {db} from './firebaseConfig'

const editExpense = ({id, description, amount, category, date}) => {
    return db.collection('expenses').doc(id).update({
        inputDescription: description,
        inputAmount: Number(amount),
        category: category,
        date: date,
    })
}

export default editExpense 
