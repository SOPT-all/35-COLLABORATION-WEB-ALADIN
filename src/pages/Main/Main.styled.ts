import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  ${props => props.theme.fonts.head_b_24};
  display: flex;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 100%;

  background-color: black;  

  color: #e9ecef;
  font-weight: bold;
  font-size: 14px; 

  animation: ease;
`;