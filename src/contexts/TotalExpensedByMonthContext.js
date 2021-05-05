import React, { useEffect, useState, useContext } from 'react'

const TotalExpensedContext = React.createContext();

const TotalExpensedProvider = ({children}) => {
    const [total, setTotal] = useState('')
    
    return(
        <TotalExpensedContext.Provider>
            {children}
        </TotalExpensedContext.Provider>
    )
}
 
export default TotalExpensedByMonthContext;