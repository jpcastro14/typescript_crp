import styled from "styled-components";

export const TopInfo = styled.div`
    min-width: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
    /* border-bottom: 25px solid var(--primary-blue); */
    border-bottom: 1px solid var(--primary-gray);
    margin:0 0 2vh 0;
    font-family: 'Assistant', sans-serif;
    div{
        display: flex;
    }
    div:last-child{
        display: flex;
        gap: 2vh;
    }

`;