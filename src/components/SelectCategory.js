import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../theme'
import CategoryIcon from '../elements/CategoryIcon'
import {ReactComponent as IconDown} from '../imagenes/down.svg'

const ContainerSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    min-width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
    @media(max-width: 60rem) {
        & > * {
            text-align: center;
            align-items: center;
        }
    }

    @media(max-width: 30rem) {
        & > * {
            font-size: 1.2rem;
        }
    }
`;
 
const OptionSelected = styled.div`
    width: 100%;
    display: flex;
    
    text-transform: capitalize;
    align-items: center;
    justify-content: center;
    margin: 0 10%;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
        display: block;
        position: absolute;
        right: 1.25rem;
    }
`;
 
const Options = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Option = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

export default function SelectCategory({category, setCategory}) {
    const [showSelect, setShowSelect] = useState(false)
    	
	const categories = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas & pagos', texto: 'Cuentas & Pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud & higiene', texto: 'Salud & Higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'diversion', texto: 'Diversión'}
    ]

    const handleClick = (e) => {
        setCategory(e.currentTarget.dataset.value)
    }

    return (
        <ContainerSelect onClick={()=>setShowSelect(!showSelect)}>
            <OptionSelected>{category} <IconDown/></OptionSelected>
            {showSelect &&
                <Options>
                   {categories.map((category)=>{
                        return(
                            <Option 
                                key={category.id}
                                data-value={category.id}
                                onClick={handleClick}
                            >
                                <CategoryIcon id={category.id}/>
                                {category.texto}
                            </Option>
                        )
                   })}
                </Options>
            }
        </ContainerSelect>
    )
}

