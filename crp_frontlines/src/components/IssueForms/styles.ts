import styled from "styled-components";

type ButtonProps = {
    $levelcolor?: string;
    $expanded?: boolean;
    $priorityColor?: string;
}

type DisplayProps = {
    open: boolean;
}

export const Container = styled.div` //Container que abriga todas as divs
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px;
    margin-top: 20px;
    button{
        background-color: var(--secondary-yellow);
        border: 1px solid #e4e4e4;
        color: black;
        border-radius: 0 0 4px 4px;
    }
`;

export const HeaderInfo = styled.div` // Div mais superior do card, com informações sobre titulo e hora do chamado
    width: 100%;
    height:10vh;
    background-color: #f9f9f9;
    display: flex;
    flex-shrink: 1;
    border-radius: 6px 6px 0 0;

`
export const EventType = styled.span`
         //  Quadrado cinza ao lado direito do quadrado azul acima
        background-color: #e4e4e4;
        min-width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 40px;
            
        }
`;

export const EventCategory = styled.span<ButtonProps>`
        background-color: ${(props) => (props.$levelcolor ? props.$levelcolor : 'white')};
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
    height: 40px;
    min-width: 720px;
    gap: 20px;
    padding:50px 0 50px 100px;
    flex-shrink: 1;
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

export const TitleInput = styled.input`
    border: 1px solid #eee;
    height: 40px;
    width: 420px;
    background-color: white;
    color: black;
`;

export const SectorInput = styled.input<ButtonProps>` //Componente do botão de Setor
    background-color: white; 
    border: 1px solid #eee;
    height: 100px;
    width: 200px;
    color: black;
`;

export const AreaInput = styled.input` // Componente do botão de Area afetada
    border: 1px solid #eee;
    height: 40px;
    width: 200px;
    background-color: white;
    color: black;
    
`;

export const CriticSelect = styled.select<ButtonProps>` // Componente do botão de criticalidade
    border: 1px solid #eee;
    width: 200px;
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : "white"};
    color: black;
   
`;

export const PrioritySelect = styled.select<ButtonProps>` // Componente do botão de prioridade
    border: 1px solid #eee;
    width: 200px;
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : "white"};
    color: black;
`;


export const PriorityContainer = styled.div<ButtonProps>`
    background-color: white;
    height: 50px;
    padding: 20px 0 0 100px;
    border-radius: 8px;
    display: ${(props) => props.$expanded ? `flex` : `none`};
    gap: 20px;
`;

export const PriorityBox = styled.button<ButtonProps>`
    width: 200px;
    height: 40px;
    background-color: ${(props) => props.$priorityColor};
    border: 1px solid #eee;
    border-radius: 8px;
    display: ${(props) => props.$expanded ? `flex` : `none`};
    right:20%;
    justify-content:center;
    align-items:center;
`;

export const TypeInput = styled.select`
    border: 1px solid #eee;
    min-width: 420px;
    padding: 4px;
    border-radius: 8px;
    color: black;

`;

export const DescriptionField = styled.textarea` // Campo de texto para mostrar a descrição do chamado
    border: 1px solid #eee;
    height: 180px;
    font-family: Assistant, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 40px 150px 0 100px ;
    padding: 20px 20px 0 20px;
    text-align: justify;
    border-radius: 8px;
    min-width: 820px;
    max-width: 820px;
    color: black;
    background-color: white;
`;

export const BodyInfo = styled.div<DisplayProps>` // Div Spare criada para setar o display do DescriptionField
    width: 100%;
    display:${(props) => (props.open ? `auto` : `none`)};
    transition:height 0px;
    width: 100%;
`;


export const ErrorP = styled.p`
    color: var(--primary-red);
    font-size: 12px;
    margin-bottom: 20px;
`;
