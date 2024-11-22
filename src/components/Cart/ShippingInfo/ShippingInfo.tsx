import CartSmallBtn from "../CartSmallBtn/CartSmallBtn";
import * as S from "./ShippingInfo.styled";

const ShippingInfo = () => {
    return (
        <S.ShippingInfoBox>
            <S.FreeShippingSuccess>무료 배송 금액을 충족하셨어요!</S.FreeShippingSuccess>
            <S.DeleveryBar />
            <S.FreeShippingNotice>1만 5천원 이상 구매시 무료배송</S.FreeShippingNotice>

            <CartSmallBtn text='더 담으러 가기'/>

        </S.ShippingInfoBox>
    )
}

export default ShippingInfo;