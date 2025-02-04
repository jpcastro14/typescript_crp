import styled from "styled-components";

export const NoUserContainer = styled.div`
    width: 100%;
    display: flex;
    padding:0;
    align-items: center;
    border: 1px solid var(--primary-gray);
    border-radius: 10px 10px 8px 8px;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 0px 20px 6px var(--primary-gray);
    width: 28vw;
    p{
        font-size: 30px;
        color: var(--primary-white);
        border: 2px solid var(--primary-red);
        background-color: var(--primary-red);
        border-radius:10px 10px 0 0;
        padding: 10px;
        width: 100%;
        display: flex;
        padding-left: 20px;
    }
    b{
        font-weight: 700;
        margin-left:5px;
        ;
    }
`;

export const CreditDiv = styled.div`
        font-size: 10px;
        color: var(--primary-white);
        border: 2px solid var(--primary-red);
        background-color: var(--primary-red);
        border-radius: 0 0 10px 10px;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: center;
`;