import { useState, useEffect } from 'react';
import { getCartList } from '@apis/getCartList';
import AddressInfo from '@components/Cart/AddressInfo/AddressInfo';
import CartItem from '@components/Cart/CartItem/CartItem';
import CartItemHeader from '@components/Cart/CartItemHeader/CartItemHeader';
import CartListHeader from '@components/Cart/CartListHeader/CartListHeader';
import PriceInfo from '@components/Cart/PriceInfo/PriceInfo';
import ShippingInfo from '@components/Cart/ShippingInfo/ShippingInfo';
import * as S from './Cart.styled';
import OrderBtn from '@components/Cart/OrderBtn/OrderBtn';
import GoodsSection from '@components/Cart/GoodsSection/GoodsSection';
import RecItemSection from '@components/Cart/RecItemSection/RecItemSection';

interface CartItemType {
  id: number;
  name: string;
  discountRate: number;
  price: number;
  discountedPrice: number;
  imageUrl: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(
    new Set<number>(),
  );

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartList(1);
        setCartItems(items);
        const allItemIds = new Set<number>(
          items.map((item: { id: number }) => item.id),
        );
        setSelectedItems(allItemIds);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCartItems();
  }, []);

  const isAllSelected = selectedItems.size === cartItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map((item) => item.id)));
    }
  };

  const handleSelectItem = (id: number) => {
    const updatedItems = new Set(selectedItems);
    if (updatedItems.has(id)) {
      updatedItems.delete(id);
    } else {
      updatedItems.add(id);
    }
    setSelectedItems(updatedItems);
  };

  const totalQty = cartItems.length;

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.has(item.id),
  );
  const selectedTotalPrice = selectedCartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  const selectedTotalDiscountedPrice = selectedCartItems.reduce(
    (acc, item) => acc + item.discountedPrice,
    0,
  );
  const selectedQty = selectedCartItems.length;

  return (
    <>
      <S.CartSection>
        <S.CartWrapper>
          <h1>장바구니</h1>
          <ShippingInfo totalPrice={selectedTotalDiscountedPrice} />
          <S.CartContainer>
            <S.ItemBox>
              <CartListHeader
                totalQty={totalQty}
                aladinDeliveryQty={totalQty}
                onSelectAll={handleSelectAll}
                isAllSelected={isAllSelected}
                selectedItems={selectedItems}
              />
              <div>
                <CartItemHeader
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    discountRate={item.discountRate}
                    price={item.price}
                    discountedPrice={item.discountedPrice}
                    imageUrl={item.imageUrl}
                    selected={selectedItems.has(item.id)}
                    onSelectItem={handleSelectItem}
                  />
                ))}
              </div>
              <S.PriceBox>
                {selectedTotalPrice.toLocaleString()}원 ({selectedQty}) + 배송비
                무료
              </S.PriceBox>
            </S.ItemBox>
            <S.DeliveryBox>
              <AddressInfo />
              <PriceInfo
                productPrice={selectedTotalPrice}
                discountPrice={
                  selectedTotalPrice - selectedTotalDiscountedPrice
                }
                totalPrice={selectedTotalDiscountedPrice}
              />
              <OrderBtn
                totalItems={selectedQty}
                totalPrice={selectedTotalDiscountedPrice}
              />
            </S.DeliveryBox>
          </S.CartContainer>
        </S.CartWrapper>
      </S.CartSection>
      <RecItemSection />
      <GoodsSection />
    </>
  );
};

export default Cart;
