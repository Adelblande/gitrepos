import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 150px;
  height: 100%;
  background: linear-gradient(#7159C1, #0be3f6);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
`;
export const BoxInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 30%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
  color: #7159C1;
`;
export const BoxInfoLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  height: 10%;
  position: absolute;
  top: 30%;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
  color: #7159C1;
`;

export const BoxInfoGit = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 40%;
  position: absolute;
  top: 60%;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border: 1px solid #0be3f6;
  border-radius: 45px;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
`;

export const BoxIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0be3f6;
  font-size: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  span {
    font-size: 16px;
  }
`;