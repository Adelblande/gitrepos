import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export const InputText = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #7159C1;
  border-radius: 5px;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #7159C1;
  }
`;

export const ButtonGit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  background: #7159C1;
  color: #FFF;
  font-weight: bold;
  cursor: pointer;
  outline: 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul li {
    list-style: none;
    font-size: 20px; 
    font-family: 'Roboto', sans-serif;
    border: 1px solid #CCC;
    cursor: pointer;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  border: 1px solid #CCC;
  border-radius: 85px;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
`;
