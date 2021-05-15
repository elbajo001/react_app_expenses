import {db} from './firebaseConfig'

const deleteExpense = (id) => {
    db.collection('expenses').doc(id).delete();
}

export default deleteExpense
