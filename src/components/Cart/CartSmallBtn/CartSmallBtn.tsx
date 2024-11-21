import * as S from "./CartSmallBtn.styled"

interface CartSmallBtnProps {
    text: string;
}

const CartSmallBtn = ( {text} : CartSmallBtnProps ) => {
    return (
        <S.StyledBtn>
            {text}
        </S.StyledBtn>
    )
}

export default CartSmallBtn;