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
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    h3{
        color: slategrey;
    }
    div{
        display: flex;
        gap:20px;
    }
   
    button:nth(2)-child{
        background-color: blue;
    }
`;

