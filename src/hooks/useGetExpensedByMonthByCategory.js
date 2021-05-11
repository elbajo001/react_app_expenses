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
            'food': 0,
            'accounts & payments': 0,
            'home': 0,
            'transport': 0,
            'clothes': 0,
            'health & care': 0,
            'purchases': 0,
            'entertainment': 0,
        })

        setExpenseByCategory(Object.keys(sumExpenses).map((element) => {
            return {category: element, amount: sumExpenses[element]}
        }))
    }, [expenses, setExpenseByCategory])
    return expenseByCategory;
}
 
export default useGetExpensedByMonthByCategory;