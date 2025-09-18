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
    display: grid;
    button{
        background-color: var(--secondary-yellow);
        border: 1px solid #e4e4e4;
        color: black;
        border-radius: 0 0 4px 4px;
    }
    @media (max-width:1000px) {
    }
`;

export const HeaderInfo = styled.div` // Div mais superior do card, com informações sobre titulo e hora do chamado
    width: 100%;
    height:10vh;
    background-color: #f9f9f9;
    display: flex;
    flex-shrink: 1;
    border-radius: 6px 6px 0 0;
    margin-bottom: 30px;
    @media (max-width:1000px) {
        span{
            font-size: 22px;
            line-height: 2.5;
        }
    }
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


export const InputField = styled.div` // DIv que agrupa os inputs da "InputContainer"
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    @media (max-width:1000px) {
        display: flex;
        flex-direction: column;
    }
`;

export const DescriptionArea = styled.div`
    display: grid;
    grid-template-columns: 80%;
    justify-content: center;
    @media (max-width:1000px) {
        grid-template-columns: 100%;
    }
`;

export const InputContainer = styled.div` // Div que organiza o label e o input
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    padding: 10px;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 600;
    label{
        color: black;
    }
    input,select{
        width: 100%;
        height: 40px;
    };
    textarea{
        width: 100%;
    }
`;

export const TitleInput = styled.input`
    border: 1px solid #eee;
    background-color: white;
    color: black;
`;

export const SectorInput = styled.input<ButtonProps>` //Componente do botão de Setor
    background-color: white; 
    border: 1px solid #eee;
    color: black;
`;

export const AreaInput = styled.input` // Componente do botão de Area afetada
    border: 1px solid #eee;
    background-color: white;
    color: black;
`;

export const CriticSelect = styled.select<ButtonProps>` // Componente do botão de criticalidade
    border: 1px solid #eee;
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : "white"};
    color: black;
   
`;

export const PrioritySelect = styled.select<ButtonProps>` // Componente do botão de prioridade
    border: 1px solid #eee;
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : "white"};
    color: black;
`;

export const TypeInput = styled.select`
    border: 1px solid #eee;
    width: 100%;
    background-color: white;
    padding: 4px;
    border-radius: 8px;
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


export const DescriptionField = styled.textarea` // Campo de texto para mostrar a descrição do chamado
    border: 1px solid #eee;
    height: 180px;
    font-family: Assistant, sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: justify;
    border-radius: 8px;
    color: black;
    background-color: white;
`;

export const BodyInfo = styled.div<DisplayProps>` // Div Spare criada para setar o display do DescriptionField
    width: 100%;
    display:${(props) => (props.open ? `auto` : `none`)};
    transition:height 0px;
    width: 100%;
`;

export const ErrorP = styled.h6`
    color: var(--primary-red);
    font-size: 12px;
`;
