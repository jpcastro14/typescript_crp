import styled from "styled-components";

export const TopInfo = styled.div`
    min-width: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
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

/*-----------------------------------Media query-----------------------------------*/


    @media (max-width:1000px) {
        min-width: 0;
        flex-direction: column;
        gap: 20px;
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            h2{
                font-size: 30px;
            }
        }
        div:last-child{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            button{
                height: 50px;
                width: 100%;
            }
        }
    }

`;