import styled from "styled-components";
import { Button } from "antd";

export const TopNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-gray) ;
    padding: 6px 0;
    h6{
        border: 1px solid var(--primary-gray);
        font-weight: 400;
        padding: 4px;
        border-radius:6px;
        height: 30px;
    }
`;

export const NewIssue = styled(Button)`
    
`;

export const OpenIssues = styled(Button)`
    background-color: var(--primary-yellow);
`;

export const UserFields = styled.div`
    display: flex;
    gap: 40px;
    justify-content: end;
    width: 100%;
`;

export const TopInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
    border-bottom: 25px solid var(--primary-blue);
    border-top: 1px solid var(--primary-gray);
    margin:0 0 2vh 0;
    font-family: 'Assistant', sans-serif;
`;

export const FilterContainer = styled.div`
    width: 100%;
    margin: 2vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    h3{
        color: dimgray;
        padding: 1vh;
        font-family: "Assistant", sans-serif;
        font-weight: 500;
        margin: 1vh 0 2vh 0;
    }
    div{
        display: flex;
        gap:20px;
    }
   
    button:nth(2)-child{
        background-color: blue;
    }
/* --------------------------------------- Media queries filter container ---------------------- */
    @media (max-width:1000px) {
        div{
            display: grid;
            gap: 10px;
            button{
                height: 40px;
            }
        }
    }
`;
/* --------------------------------------- Media queries --------------------------------------- */



export const NoIssue = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 2vh;
    background-color: var(--primary-red);
    color: white;
`;

export const CloseIssueSelect = styled.select`
    width: 100%;
    margin-bottom: 2vh;
    border-radius: 8px;
    height: 4vh;
`;

