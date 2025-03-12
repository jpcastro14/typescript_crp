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
    height: 100%;
    background-color:${(props) => (props.$fieldcolor ? props.$fieldcolor : 'white')};
    border: 1px solid var(--primary-gray);
`;

