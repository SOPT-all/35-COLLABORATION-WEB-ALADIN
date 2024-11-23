import AddressInfo from '@components/Cart/AddressInfo/AddressInfo';
import CartItem from '@components/Cart/CartItem/CartItem';
import CartItemHeader from '@components/Cart/CartItemHeader/CartItemHeader';
import CartListHeader from '@components/Cart/CartListHeader/CartListHeader';
import PriceInfo from '@components/Cart/PriceInfo/PriceInfo';
import ShippingInfo from '@components/Cart/ShippingInfo/ShippingInfo';
import * as S from './Cart.styled';
import OrderBtn from '@components/Cart/OrderBtn/OrderBtn';

const cartItems = [
  {
    id: 1,
    name: '[국내도서] 가난한 찰리의 연감',
    discountRate: 10,
    price: 33000,
    discountedPrice: 29700,
    imageUrl: 'https://via.placeholder.com/80x120',
  },
  {
    id: 2,
    name: '[국내도서] 뭐가 있을까 ..',
    discountRate: 5,
    price: 28000,
    discountedPrice: 26600,
    imageUrl: 'https://via.placeholder.com/80x120',
  },
  {
    id: 3,
    name: '[국내도서] 흠냐냥',
    discountRate: 5,
    price: 28000,
    discountedPrice: 26600,
    imageUrl: 'https://via.placeholder.com/80x120',
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalDiscountedPrice = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice,
    0,
  );

  const totalQty = cartItems.length;

  return (
    <S.CartWrapper>
      <h1>장바구니</h1>
      <ShippingInfo />
      <S.CartContainer>
        <S.ItemBox>
          <CartListHeader totalQty={totalQty} aladinDeliveryQty={totalQty} />
          <div>
            <CartItemHeader />
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                discountRate={item.discountRate}
                price={item.price}
                discountedPrice={item.discountedPrice}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <S.PriceBox>
            {totalPrice.toLocaleString()}원 ({totalQty}) + 배송비 무료
          </S.PriceBox>
        </S.ItemBox>
        <S.DeliveryBox>
          <AddressInfo />
          <PriceInfo
            productPrice={totalPrice}
            discountPrice={totalPrice - totalDiscountedPrice}
            totalPrice={totalDiscountedPrice}
          />
          <OrderBtn totalItems={totalQty} totalPrice={totalPrice} />
        </S.DeliveryBox>
      </S.CartContainer>
    </S.CartWrapper>
  );
};

export default Cart;
