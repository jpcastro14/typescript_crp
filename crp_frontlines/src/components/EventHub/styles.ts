import styled from "styled-components";
import { Button } from "antd";

export const TopNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-gray) ;
    h6{
        border: 1px solid var(--primary-gray);
        font-weight: 400;
        padding: 4px;
        border-radius: 6px;
        height: 30px;
    }
`;

export const NewIssue = styled(Button)`
    background-color: var(--primary-yellow);
`;

export const UserFields = styled.div`
    display: flex;
    gap: 40px;
    justify-content: end;
    width: 100%;
`;
