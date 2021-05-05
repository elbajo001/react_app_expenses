import styled, {keyframes} from 'styled-components';
import theme from '../theme';

const ContainerModal = styled.div`
    display: ${(props) => {
        if(props.close) return 'none';
        else return 'block';
    }}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const topToMiddle = keyframes`
    from {top:200px; opacity: 0}
    to {top:0; opacity: 1}
`;

const ModalContent = styled.div`
    background-color: #fff;
    position: relative;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 50%; /* Could be more or less, depending on screen size */
    border-radius: 0.9em;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation: ${topToMiddle} 0.4s ease forwards;

    p {
        margin-bottom: 4rem;
        font-size: 1.25rem;
    }

    h1 {
        margin-top: 4rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 50rem) { /* 80px */
        font-size: 1rem;
        width: 90%;
    }
`;

const ButtonIcon = styled.button`
    float: right;
    font-weight: bold;    
    outline: none;
    border: none;
    background: #fff;
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    border-radius: 50%; /* 5px */
    transition: .3s ease all;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    top: -15px;
    right: -15px;

    &:hover {
        text-decoration: none;
        cursor: pointer;
        background: #dbdbdb;
    }

    svg {
        width: 1.125rem; /* 18px */
    }
`;

const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonActionDelete = styled.button`
    font-weight: bold; 
    outline: none;
    border: none;
    background: ${theme.naranjaClaro};
    height: 3rem; /* 40px */
    width: 10rem; /* 40px */
    border-radius: 0.62rem; /* 5px */
    transition: .3s ease all;
    margin-right:5px;
    cursor: pointer;

    &:hover {
        background: ${theme.naranjaClaro2};
    }

    @media (max-width: 50rem) { /* 80px */
        font-size: 0.9rem;
    }
`;
const ButtonActionCancel = styled.button`
    outline: none;
    border: none;
    font-weight: bold;
    background: none;
    border: 1px solid ${theme.naranjaClaro};
    height: 3rem; /* 40px */
    width: 10rem; /* 40px */
    border-radius: 0.62rem; /* 5px */
    transition: .3s ease all;
    cursor: pointer;

    &:hover {
        border: 1px solid ${theme.naranjaClaro2};
    }

    @media (max-width: 50rem) { /* 80px */
        font-size: 0.9rem;
    }
`;

export {
    ContainerModal,
    ModalContent,
    ButtonIcon,
    ModalButtons,
    ButtonActionDelete,
    ButtonActionCancel
};