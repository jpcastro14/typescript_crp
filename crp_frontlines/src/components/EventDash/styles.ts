import styled from "styled-components";


type ButtonProps = {
    $levelcolor?: string;
    $expanded?: boolean;
    $priorityColor?: string;
    $activeIssue?: boolean;
}

type DisplayProps = {
    open: boolean;
}

export const Container = styled.div` //Container que abriga todas as divs
    width: 100%;
    flex: 1 1;
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
`;

export const HeaderInfo = styled.div` // Div mais superior do card, com informações sobre titulo e hora do chamado
    min-width: 50vw;
    height: 16vh;
    background-color: #f9f9f9;
    display: flex;
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

export const EventActive = styled.span<ButtonProps>`
        background-color: ${(props) => (props.$activeIssue ? 'var(--primary-green)' : 'var(--primary-red)')};
        height: 100%;
        width: 8px;
        border-radius: 0 5px 5px 0;
        border: 1px solid #eee;
`;


export const EventTitle = styled.div` //Contém o titulo e os action buttons
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    color: black;
    padding-left: 3vh;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 35px;
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    p{
        font-size: 20px;
        margin-bottom: 8px;
        padding: 0;
        color: #9e9e9e;
    }
    p:last-child{
        color: red;
        border: 1px solid var(--primary-red);
        border-radius: 4px;
        padding: 0 10px;
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
    padding: 70px;
    max-width: 50vw;
`;

export const PointerPill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const PointerContainer = styled.div` // Div que organiza cada action button
    display: flex;
    flex-direction: row;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 600;
    width: 12vw;
    label{
        color: black;
    }
`;

export const SectorButton = styled.button<ButtonProps>` //Componente do botão de Setor
    background-color: white; 
    border: 1px solid #eee;
    height: 40px;
    width: 10vw;
    color: black;
`;

export const AreaButton = styled.button` // Componente do botão de Area afetada
    border: 1px solid #eee;
    height: 40px;
    width: 10vw;

    background-color: white;
    color: black;
    
`;

export const CriticButton = styled.button<ButtonProps>` // Componente do botão de criticalidade
    border: 1px solid #eee;
    height: 40px;
    width: 10vw;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : 'white'};
    color: black;
   
`;

export const PrioritySelect = styled.button<ButtonProps>` // Componente do botão de prioridade
    border: 1px solid #eee;
    height: 40px;
    width: 10vw;
    border-radius: 8px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : "white"};
    color: black;
`;

export const PriorityContainer = styled.div<ButtonProps>`
    background-color: white;
    height: 50px;
    padding: 20px 0 0 100px;
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
    height: 12vh;
    font-family: Assistant, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 60px;
    padding: 20px 20px 0 20px;
    text-align: justify;
    border-radius: 8px;
    width: 42vw;
    color: black;
    background-color: white;
`;

export const BodyInfo = styled.div<DisplayProps>` // Div Spare criada para setar o display do DescriptionField
    width: 100%;
    transition: height 1000ms;
    display:${(props) => (props.open ? `none` : `auto`)};
`
export const ErrorP = styled.p`
    color: var(--primary-red);
`;