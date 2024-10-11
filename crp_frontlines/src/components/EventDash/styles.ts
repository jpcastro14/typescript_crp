import styled from "styled-components";


type ButtonProps ={
    levelColor?: string
}

type DisplayProps = {
    open:boolean;
}

export const Container = styled.div` //Container que abriga todas as divs
    min-width: 1200px;
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 0 0 50px;
    transition: 3000ms;
`;

export const HeaderInfo = styled.div` // Div mais superior do card, com informações sobre titulo e hora do chamado
    width: 100%;
    height:130px;
    background-color: #f9f9f9;
    display: flex;
    flex-shrink: 1;
    border-radius: 6px 6px 0 0;
    .EventType{ //  Quadrado cinza ao lado direito do quadrado azul acima
        background-color: #e4e4e4;
        min-width: 80px;
        height: 100%;
    }

`

export const EventCategory = styled.span<ButtonProps>`
        background-color: ${(props)=> (props.levelColor ? props.levelColor : 'white' )};
        height: 100%;
        width: 25px;
        border-radius: 5px 0 0 5px ;
`;

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
        background-color: white;
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

export const PointerContainer = styled.div` // Div que organiza cada action button
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 600;
    label{
        color: black;
    }
`;

export const SectorButton = styled.button<ButtonProps>` //Componente do botão de Setor
    background-color: white; 
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    color: black;
`;

export const AreaButton = styled.button` // Componente do botão de Area afetada
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: #006fe6;
    color: white;
`; 

export const CriticButton = styled.button<ButtonProps>` // Componente do botão de criticalidade
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: ${(props)=> props.levelColor ? props.levelColor : 'white'};
    color: ${(props) => props.levelColor ? "black" : "white" };
   
`;

export const PriorityButton = styled.button<ButtonProps>` // Componente do botão de prioridade
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: ${(props)=> props.levelColor ? props.levelColor : "white"};
    color: black;
`;

export const DescriptionField = styled.div` // Campo de texto para mostrar a descrição do chamado
    border: 1px solid #eee;
    height: 200px;
    margin: -40px 150px 20px 100px ;
    padding: 20px 20px 0 20px;
    text-align: justify;
    border-radius: 8px;
    color: black;
`;

export const BodyInfo = styled.div<DisplayProps>` // Div Spare criada para setar o display do DescriptionField
    width: 100%;
    display:${(props)=> (props.open ? `none` : `auto` )};
    transition:height 0px;
`
