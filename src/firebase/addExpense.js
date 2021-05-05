import {db} from './firebaseConfig'

const addExpense = ({description, amount, category, date, uidUser}) => {
    return db.collection('expenses').add({
        inputDescription: description,
        inputAmount: Number(amount),
        category: category,
        date: date,
        user: uidUser
    })
}

export default addExpense
