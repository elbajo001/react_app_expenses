import {db} from './firebaseConfig'

const deleteExpense = (id) => {
    return db.collection('expenses').doc(id).delete();
}

export default deleteExpense
