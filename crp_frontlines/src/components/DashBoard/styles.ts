import styled from "styled-components";

interface PointerDivProps {
    $fieldcolor?: string;
}

export const Container = styled.div`
    height: 200px;
    margin: 0 0 20px 0 ;
    display: grid;
    justify-content:space-between;
    padding: 1px;
    grid-template-columns: 33% 33% 33%;

`;

export const PointerDiv = styled.div<PointerDivProps>`
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    background-color:${(props) => (props.$fieldcolor ? props.$fieldcolor : 'white')};
    border: 1px solid var(--primary-gray);
    font-family: "Assistant";
    border-radius: 6px;
    header{
        background-color: white;
        width: 100%;
        display: flex;
        padding: 10px;
        justify-content: center;
        filter: opacity(0.7);
        font-weight: 500;
    }
    div{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 60px;
        color: var(--primary-white);
    }
`;

export const OpenIssuePointerDiv = styled.div<PointerDivProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color:${(props) => (props.$fieldcolor ? props.$fieldcolor : 'white')};
    border: 1px solid var(--primary-gray);
    font-family: "Assistant";
    border-radius: 6px;
    @media (max-width:1000px) {
        display: none;
    }
    header{
        background-color: white;
        width: 100%;
        display: flex;
        padding: 10px;
        justify-content: center;
        filter: opacity(0.7);
        font-weight: 600;
        border-radius: 6px 6px 0 0;
    }
    div{
        display: flex;
        justify-content: center;
        font-size: 30px;
        font-weight: 500;
    }
    div:last-child{
        display: grid;
        grid-template-columns: 50% 50%;
        section{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--secondary-yellow);
            height: 10vh;
            font-weight: 500;
            font-size: 30px;
            padding-top: 6px;
            span{
                font-size: 18px;
            }
        }
    }
`;

