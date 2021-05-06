import React, { useEffect, useState, useContext } from 'react'
import useGetExpensesByMonth from '../hooks/useGetExpensesByMonth'

const TotalExpensedContext = React.createContext();

const useTotalByMonth = () => useContext(TotalExpensedContext);

const TotalExpensedProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const expenses = useGetExpensesByMonth();

    useEffect(() => {
        let sumAmount = 0;
        expenses.forEach((expense) => {
            sumAmount += expense.inputAmount;
        });
        setTotal(sumAmount);
    }, [expenses])
    
    return(
        <TotalExpensedContext.Provider value={{total: total}}>
            {children}
        </TotalExpensedContext.Provider>
    )
}
 
export {TotalExpensedProvider, useTotalByMonth};