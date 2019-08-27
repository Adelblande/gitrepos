import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export const InputText = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #CDCDCD;
  border-radius: 5px;
  font-size: 18px;
`;

export const ButtonGit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(to right, #7159C1, #0be3f6 );
  color: #FFF;
  font-weight: bold;
  cursor: pointer;
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
