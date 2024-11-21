import styled from "@emotion/styled";
import theme from "@styles/theme";

export const StyledBtn = styled.button`
    text: ${theme.colors.text_gray40};
    border: 1px solid ${theme.colors.stroke_gray50};
    ${theme.fonts.body10_sb_11};
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
`;