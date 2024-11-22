import styled from "@emotion/styled";
import theme from "@styles/theme";

export const ShippingInfoBox = styled.div`
    display: flex;
    align-items: center; 
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.stroke_gray10};
    border-radius: 10px;
    padding: 1.5rem 1rem;
    gap: 2rem;
`;

export const FreeShippingSuccess = styled.span`
    color: ${theme.colors.text_gray40};
    ${theme.fonts.title3_b_15};
`;

export const DeleveryBar = styled.div`
    width: 47.8rem;
    height: 1.7rem;
    background: ${theme.colors.gradient_purple1};
    border-radius: 20px;
`;

export const FreeShippingNotice = styled.span`
    color: ${theme.colors.text_gray40};
    ${theme.fonts.caption3_r_9};
`;
