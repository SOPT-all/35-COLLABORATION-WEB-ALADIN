import styled from "@emotion/styled";
import theme from "@styles/theme";

export const StyledBtn = styled.button`
    padding: 0.4rem 0.6rem;
    border: 1px solid ${theme.colors.stroke_gray50};
    border-radius: 0.5rem;

    color: ${theme.colors.text_gray40};
    ${theme.fonts.body10_sb_11};
`;