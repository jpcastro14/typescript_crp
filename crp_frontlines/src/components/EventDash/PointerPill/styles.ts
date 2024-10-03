import styled from "styled-components";

interface PillProps {
    label?: string;
  sector?: string;
  area?: string;
  criticality?: boolean;
  priority?: boolean;
}


export const PillContainer = styled.button<PillProps>` // Bot'oes indicadores 
    background-color: ${props => props.priority ? '#fed766' : 'white'};
`

export const Layout = styled.div` // Div que organiza os botões
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 500;
    font-size: 18px;
`;