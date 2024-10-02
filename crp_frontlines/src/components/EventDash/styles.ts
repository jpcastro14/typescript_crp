import styled from "styled-components";

export const Container = styled.div`
    min-width: 1200px;
     // tirar depois que criar os elementos internos
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
`;

export const HeaderInfo = styled.div` // Div mais superior do card
    width: 100%;
    height:130px;
    background-color: #f9f9f9;
    display: flex;
    flex-shrink: 1;
    border-radius: 6px 6px 0 0;
    .EventCategory{ // Barra azul a esquerda do card
        background-color: #006fe6;
        height: 100%;
        width: 35px;
        border-radius: 5px 0 0 5px ;
    }
    .EventType{ //  Ícone no quadrado cinza ao lado direito do quadrado azul acima
        background-color: #e4e4e4;
        min-width: 112px;
        height: 100%;
    }

`
export const EventTitle = styled.div` //Contem o titulo e os action buttons
    width: 100%;
    background-color: #f9f9f9;
    padding: 20px 0 0 30px;
    display: flex;
    
    
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    font-size: 35px;
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    p{
        font-size: 20px;
        margin: 0;
        color: #9e9e9e;
    }
`;

export const EventAction = styled.div` // Div dos botões de ação
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    padding-right: 30px;
    font-family: "Assistant", sans-serif;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        border: 2px solid #006fe6;
    }
    
`

export const PointerField = styled.div`
    display: flex;
    height: 40px;
`;
