import styled from "styled-components";

export const FilterContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    h3{
        color: slategrey;
    }
    div{
        display: flex;
        gap: 20px;
    }
    button:last-child{
        background-color: var(--primary-red);
    }
    button:nth(2)-child{
        background-color: blue;
    }

`;