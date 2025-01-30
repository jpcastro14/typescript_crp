import styled from "styled-components";

export const TopNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: baseline;
    gap:20px;
    border-bottom: 1px solid var(--primary-gray) ;
    h6{
        border: 1px solid var(--primary-gray);
        font-weight: 400;
        padding: 4px;
        border-radius: 6px;
        height: 30px;
    }
`;
