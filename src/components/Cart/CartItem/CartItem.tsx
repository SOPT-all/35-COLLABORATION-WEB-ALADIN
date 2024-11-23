import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';
import QtyBtn from '../QtyBtn/QtyBtn';
import * as S from './CartItem.styled';

interface CartItemProps {
  id: number;
  name: string;
  discountRate: number;
  price: number;
  discountedPrice: number;
  imageUrl: string;
}

const CartItem = ({
  id,
  name,
  discountRate,
  price,
  discountedPrice,
  imageUrl,
}: CartItemProps) => {
  return (
    <S.CartItemContainer>
      <S.ToggleBox>
        <CheckboxBtn />
        <img
          src={imageUrl}
          alt={name}
          style={{ width: '6.9rem', height: '9.9rem' }}
        />
        <S.BookInfo>
          <S.BookTitle>{name}</S.BookTitle>
          <S.BookPriceInfo>
            <S.DiscountRate>{discountRate}%</S.DiscountRate>
            <S.DiscountedPrice>
              {discountedPrice.toLocaleString()}원
            </S.DiscountedPrice>
            <S.Price>{price.toLocaleString()}원</S.Price>
            <S.Point>({Math.floor(price * 0.05).toLocaleString()}P)</S.Point>
          </S.BookPriceInfo>
        </S.BookInfo>
      </S.ToggleBox>
      <S.BtnBox>
        <span>{discountedPrice.toLocaleString()}원</span>
        <QtyBtn />
      </S.BtnBox>
      <S.ContentBox>
        <span>내일 아침 7시 출근전 배송</span>
      </S.ContentBox>
    </S.CartItemContainer>
  );
};

export default CartItem;
