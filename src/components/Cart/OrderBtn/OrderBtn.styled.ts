import styled from "@emotion/styled";
import theme from "@styles/theme";

export const StyledBtn = styled.button`
  background-color: ${theme.colors.purple50};
  border-radius: 10px;
  color: white;
  ${theme.fonts.body2_b_14};
  width: 25rem;
  height: 5.6rem;
  transition: 
    background-color 0.3s ease, 
    color 0.3s ease, 
    width 0.3s ease, 
    height 0.3s ease; 

  &:active {
    background-color: ${theme.colors.purple60};
    color: ${theme.colors.purple40};
    width: 23.6rem; 
    height: 5.2rem;
  }
`;
