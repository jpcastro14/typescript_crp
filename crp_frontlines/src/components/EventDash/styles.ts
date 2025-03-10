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
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;

`;

export const HeaderInfo = styled.div` // Div mais superior do card, com informações sobre titulo e hora do chamado
    height: 16vh;
    background-color: #f9f9f9;
    display: flex;
    border-radius: 6px;
    justify-content: space-between;
    @media (max-width:1000px) {
        width: 100%;
    }
`
export const EventType = styled.span`//  Quadrado cinza ao lado direito do quadrado azul acima
        background-color: #e4e4e4;
        min-width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 40px;
        }
        @media (max-width:1000px) {
            display: none;
        }
`;

export const EventCategory = styled.span<ButtonProps>`
        background-color: ${(props) => (props.$levelcolor ? props.$levelcolor : 'white')};
        height: 100%;
        width: 25px;
        border-radius: 5px 0 0 5px ;
        @media (max-width:1000px) {
            width: 8px;
        }
`;

export const EventActive = styled.span<ButtonProps>`
        background-color: ${(props) => (props.$activeIssue ? 'var(--primary-green)' : 'var(--primary-red)')};
        height: 100%;
        width: 8px;
        border-radius: 0 5px 5px 0;
        border: 1px solid #eee;
        @media (max-width:1000px) {
            width: 4px;
        }
`;


export const EventTitle = styled.div` //Contém o titulo e os action buttons
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    color: black;
    padding-left: 20px;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 35px;
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    p{
        font-size: 2vh;
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
    span{
        font-size: 4vh;
    }
    /* ---------------------------- Media queries EventTitle ---------------------------- */
    @media (max-width:1000px) {
        width: 100%;
        padding: 0 0 0 10px;
        display: flex;
        align-items: self-start;
        span{
            font-size: 30px;
        }
        p{
            font-size:16px;
        }
        p:last-child{
            font-size: 16px;
        }
        span:last-child{
            font-size: 20px;
            justify-self: center;
        }
    }
    /* ---------------------------- Media queries EventTitle ---------------------------- */
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
    /* ---------------------------- Media queries EventAction ---------------------------- */
    @media (max-width:1000px) {
        display: none;
        
    }
    /* ---------------------------- Media queries EventAction ---------------------------- */
    
`

export const PointerField = styled.div` // Div que organiza os buttons e o description
    display: flex;
    margin-top: 20px;
    justify-content: center;
    gap: 12px;
    padding: 10px;

    /* ---------------------------- Media Queries PointerField ---------------------------- */
    @media (max-width:1000px) {
        width:100%;
        display: flex;
        flex-direction: column;
    }
    /* ---------------------------- Media Queries PointerField ---------------------------- */

`;

export const PointerPill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (max-width:1000px ) {
        width: 100%;
        button{
            width: 100%;
        }
    }
`;

export const PointerContainer = styled.div` // Div que organiza cada action button
    display: flex;
    flex-direction: row;
    align-items: start;
    font-family: "Assistant", sans-serif;
    font-weight: 600;
    margin: 0 0 2vh 0;
    min-width: 100px;
    label{
        color: black;
    }
    @media (max-width:1000px) {
        margin: 0;
    }
`;

export const SectorButton = styled.button<ButtonProps>` //Componente do botão de Setor
    border: 1px solid #eee;
    height: 40px;
    min-width: 180px;
    background-color: ${(props) => props.$levelcolor ? props.$levelcolor : 'white'};
    color: black;
    @media (max-width:1000px) {
    }
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
    height: 20vh;
    font-family: Assistant, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0 0 2vh 0;
    padding: 20px 20px 0 20px;
    text-align: justify;
    border-radius: 8px;
    color: black;
    width: 100%;
    background-color: white;
    @media (max-width:1000px) {
        width: 100%;
        border: none;
        background-color: whitesmoke;
    }
`;

export const DescriptionContainer = styled.div`
    margin: 10px;
`;

export const CloseIssueDesc = styled.textarea`
    width: 100%;
    border: 1px solid var(--primary-gray);
    border-radius: 8px;
    min-height: 20vh;
    padding: 2vh;
`;

export const BodyInfo = styled.div<DisplayProps>` // Div Spare criada para setar o display do DescriptionField
    width: 100%;
    display:${(props) => (props.open ? `none` : `auto`)};
`
export const DeleteButton = styled.button`
    background: var(--primary-red);
    justify-self: center;
    width: 100%;
    color:white;
    font-family: "Assistant", sans-serif;
    border-radius: 0 0 4px 4px;
`

export const ErrorP = styled.p`
    color: var(--primary-red);
`;