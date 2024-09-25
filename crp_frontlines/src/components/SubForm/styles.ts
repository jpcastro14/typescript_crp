import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px 10px 40px;
  gap: 10px;
  border: 1px solid #111111;
  border-radius: 10px;
  align-items: center;
  ul{
    list-style: none;
    margin: none;
    flex-direction: column;
    padding: 10px;
    display: flex;
    gap: 20px;
    li{
      background-color: darkslategrey;
      padding: 10px;
      display: flex;
      gap: 10px;
      align-items: center;
      border-radius: 8px;
      button{
        background-color: gray;
        font-size: 10px;
      }
    }
  }
  input{
    border:none;
    padding: 5px;
    height: 28px;
    border-radius: 6px;
  }
`;
