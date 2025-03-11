import styled from "styled-components";

export const NoUserContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    border: 1px solid var(--primary-gray);
    border-radius: 10px 10px 8px 8px;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    box-shadow: 0px 0px 20px 6px var(--primary-gray);
    margin-top: 20vh;
    p{
        font-size: 30px;
        color: black;
        width: 100%;
        display: flex;
        padding-left: 20px;
        background-color: var(--primary-blue);
        filter: opacity(0.9);
    }
    b{
        font-weight: 700;
        margin-left:5px;
        ;
    }
    button{
        width: 100%;
    }
`;

export const CreditDiv = styled.div`
        font-size: 10px;
        color: var(--primary-white);
        background-color: var(--primary-blue);
        width: 100%;
        display: flex;
        justify-content: center;
`;