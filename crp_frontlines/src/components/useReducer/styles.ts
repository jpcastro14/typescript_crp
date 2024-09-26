import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  min-width: 400px;
  flex-direction: column;
  align-items: stretch;
  font-family: poppins;
  gap: 10px;
  border-radius: 10px;
  background-color: #4f4f4f;
  padding: 40px;
  label{
    justify-self: start;
    align-self: flex-start;
    background-color: #1a1a1a;
    padding: 2px 8px 2px 8px;
    border-radius: 6px;
  }
  ul{
    list-style: none;
    margin: none;
    flex-direction: column;
    padding: 10px;
    display: flex;
    gap: 20px;
    li{
      background-color: #dbdbdb;
      color: #1a1a1a;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      span{
        width: 100%;
        display: flex;
      }
      button{
        background-color: gray;
        font-size: 10px;
        transition: ease-in-out 150ms;
        &:hover{
          border: 1px solid red;
          color: red;
          background-color: #dbdbdb;
        }
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

export const Header = styled.div`
  display: flex;
  font-family: poppins;
`;

export const ButtonDiv = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  button{
    width: 100%;
  }
`;