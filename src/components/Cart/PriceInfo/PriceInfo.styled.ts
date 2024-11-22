import styled from "@emotion/styled";
import theme from "@styles/theme";

export const PriceInfoWrapper = styled.div`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.stroke_gray10};
    border-radius: 10px;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    color: ${theme.colors.text_gray30};
`;


export const PriceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const TextBox = styled.div<{ gap: string }>`
    display: flex;
    gap: ${(props) => props.gap}; 
`;


export const Title = styled.span`
    ${theme.fonts.body7_r_12};
`;

export const Content = styled.span`
    ${theme.fonts.body7_sb_12};
`;

export const TotalPriceBox = styled.div`
    width: 100%;
    ${theme.fonts.body2_b_14};
    padding-top: 1rem;
    border-top: 1px solid ${theme.colors.purple40};
    display: flex;
    justify-content: center;
    gap: 4.2rem;
`;

