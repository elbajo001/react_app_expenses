import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import convertToMoney from '../functions/convertToMoney'
import {useTotalByMonth} from '../contexts/TotalExpensedByMonthContext'

const BarTotal = styled.div`
    background: ${theme.colorSecundario};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 2px;
    font-weight: 400;
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
    const {total} = useTotalByMonth();

    return ( 
        <BarTotal>
            <p><b>Total gastado</b> en el mes:</p>
            <p>{convertToMoney(total)}</p>
        </BarTotal>
     );
}
 
export default BarTotalExpensed;