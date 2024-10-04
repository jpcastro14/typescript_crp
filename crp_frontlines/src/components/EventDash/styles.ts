import styled, { keyframes } from "styled-components";


type ButtonProps ={
    levelColor?: string
}

type DisplayProps = {
    open:boolean;
}

export const Container = styled.div`
    min-width: 1200px;
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 0 0 50px;
    transition: 3000ms;
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
        width: 25px;
        border-radius: 5px 0 0 5px ;
    }
    .EventType{ //  Ícone no quadrado cinza ao lado direito do quadrado azul acima
        background-color: #e4e4e4;
        min-width: 80px;
        height: 100%;
    }

`
export const EventTitle = styled.div` //Contém o titulo e os action buttons
    width: 100%;
    background-color: #f9f9f9;
    padding: 20px 0 0 30px;
    display: flex;
    color: black;
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
        img{
            height: 35px;
            width: 35px;
        }
    }
    
`

export const PointerField = styled.div` // Div que organizaos buttons e o description
    display: flex;
    height: 80px;
    gap: 20px;
    padding:50px 0 50px 100px;
`;

export const PointerContainer = styled.div` // Div que organiza cad button
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 600;
`;

export const SectorButton = styled.button<ButtonProps>`
    background-color: white; 
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
`;

export const AreaButton = styled.button`
   // background-color: white; 
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: #006fe6;
    color: white;
`; 

export const CriticButton = styled.button<ButtonProps>`
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: ${(props)=> props.levelColor ? props.levelColor : 'white'};
    color: ${(props)=> props.levelColor ? 'white' : 'white' };
   
`;

export const PriorityButton = styled.button<ButtonProps>`
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: ${(props)=> props.levelColor ? props.levelColor : "white"};
`;

export const DescriptionField = styled.div`
    border: 1px solid #eee;
    height: 200px;
    margin: -40px 150px 20px 100px ;
    padding: 20px 20px 0 20px;
    text-align: justify;
    border-radius: 8px;
`;

export const BodyInfo = styled.div<DisplayProps>`
    width: 100%;
    display:${(props)=> (props.open ? `none` : `auto` )};
    transition:height 0px;
`
