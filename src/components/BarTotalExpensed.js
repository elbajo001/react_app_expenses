import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import convertToMoney from '../functions/convertToMoney'

const BarTotal = styled.div`
    background: ${theme.colorSecundario};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;

const BarTotalExpensed = () => {
    return ( 
        <BarTotal>
            <p><b>Total Expensed</b> by month:</p>
            <p>{convertToMoney(20000.00)}</p>
        </BarTotal>
     );
}
 
export default BarTotalExpensed;