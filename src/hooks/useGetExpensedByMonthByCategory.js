import { useState, useEffect } from 'react'
import useGetExpensesByMonth from './useGetExpensesByMonth'

const useGetExpensedByMonthByCategory = () => {
    const [expenseByCategory, setExpenseByCategory] = useState([])
    const expenses = useGetExpensesByMonth();

    useEffect(() => {
        const sumExpenses = expenses.reduce((objResult, objCurrent) => {
            const categoryCurrent = objCurrent.category;
            const amountCurrent = objCurrent.inputAmount;

            objResult[categoryCurrent] += amountCurrent;

            return objResult;
        }, {
            'comida': 0,
            'cuentas y pagos': 0,
            'hogar': 0,
            'transporte': 0,
            'ropa': 0,
            'salud e higiene': 0,
            'compras': 0,
            'diversion': 0,
        })

        setExpenseByCategory(Object.keys(sumExpenses).map((element) => {
            return {category: element, amount: sumExpenses[element]}
        }))
    }, [expenses, setExpenseByCategory])
    return expenseByCategory;
}
 
export default useGetExpensedByMonthByCategory;