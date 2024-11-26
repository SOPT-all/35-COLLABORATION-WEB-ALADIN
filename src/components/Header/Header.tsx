import React, { useEffect, useState } from 'react';
import * as S from './Header.styled';
import {
  AladinLogo,
  IcChevronSmallRight,
  IcMenuSmallGray,
  IcMypageGray,
  IcSearch,
  IcShoppingcartGray,
  XGroup2,
} from '@assets/svgs';
import { SerachUnder } from '@assets/svgs';
import { useNavigate } from 'react-router-dom';
import { instance } from '@apis/apis';

type Categories = {
  domesticBooks: string[];
  foreignBooks: string[];
  eBooks: string[];
  onlineCourses: string[];
  music: string[];
  blueRay: string[];
  aladinGoods: string[];
};

type ResponseData = {
  data: {
    categories: Categories;
    boldCategories: string[];
  };
};

type ApiResponse = {
  code: number;
  message: string;
  data: ResponseData;
};

const Header = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [headerMenuCategories, setHeaderMenuCategories] =
    useState<Categories>();
  const [boldCategories, setBoldCategories] = useState<Set<string>>(
    new Set(...[]),
  );

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response: ApiResponse = await instance.get('/api/v1/categories');
        setHeaderMenuCategories(response.data.data.categories);
        setBoldCategories(new Set(response.data.data.boldCategories));
      } catch (e) {
        console.log(e);
      }
    };
    fetchHeaderData();
  }, []);

  return (
    <S.HeaderWrapper>
      <S.HeaderTop>
        <S.HeaderTopCategoryLayout>
          <S.CategoryDiv
            onClick={() => {
              navigate('/');
            }}
            $isMain={true}
            style={{ cursor: 'pointer' }}
          >
            HOME
          </S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>국내도서</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>외국도서</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>eBook</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>알라딘굿즈</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>온라인중고</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>우주점</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>중고매장</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>커피</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>음반</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>블루레이</S.CategoryDiv>
        </S.HeaderTopCategoryLayout>
        <S.HeaderTopUserLayout>
          <S.UserOptionDiv>로그인</S.UserOptionDiv>
          <S.UserOptionDiv>회원가입</S.UserOptionDiv>
          <S.UserOptionDiv>고객센터</S.UserOptionDiv>
        </S.HeaderTopUserLayout>
      </S.HeaderTop>

      <S.HeaderSearch>
        <S.HeaderSearchLeft>
          <AladinLogo
            onClick={() => {
              navigate('/');
            }}
            style={{ cursor: 'pointer' }}
          />
          <S.HeaderSearchLayout>
            <S.HeaderSearchBox>
              <S.SearchBoxLeftBtn>
                <span>통합검색</span>
                <SerachUnder />
              </S.SearchBoxLeftBtn>
              <S.SearchPlaceHolder>세일러와 페카 삼부작</S.SearchPlaceHolder>
              <IcSearch style={{ marginLeft: '29.6rem' }} />
            </S.HeaderSearchBox>
            <S.SearchHeaderRightBox>
              상세검색
              <IcChevronSmallRight />
            </S.SearchHeaderRightBox>
          </S.HeaderSearchLayout>
        </S.HeaderSearchLeft>
        <S.HeaderSearchRight>
          <S.HeaderRightItem
            onClick={() => {
              navigate('/cart');
            }}
          >
            <IcShoppingcartGray />
          </S.HeaderRightItem>
          <S.HeaderRightItem>
            <IcMypageGray />
          </S.HeaderRightItem>
        </S.HeaderSearchRight>
      </S.HeaderSearch>

      <S.HeaderBottom>
        <S.SeeBtn
          $isShow={isShow}
          onClick={() => {
            setIsShow(true);
          }}
        >
          <IcMenuSmallGray />
          분야 보기
        </S.SeeBtn>
        <S.HeaderBottomItemLayout>
          <S.HeaderBottomItem>추천마법사</S.HeaderBottomItem>
          <S.HeaderBottomItem>베스트셀러</S.HeaderBottomItem>
          <S.HeaderBottomItem>새로나온책</S.HeaderBottomItem>
          <S.HeaderBottomItem>이벤트</S.HeaderBottomItem>
          <S.HeaderBottomItem>정가인하도서</S.HeaderBottomItem>
          <S.HeaderBottomItem>추천도서</S.HeaderBottomItem>
          <S.HeaderBottomItem>작가와의 만남</S.HeaderBottomItem>
          <S.HeaderBottomItem>북펀드</S.HeaderBottomItem>
          <S.HeaderBottomItem>북플</S.HeaderBottomItem>
          <S.HeaderBottomItem>서재</S.HeaderBottomItem>
          <S.HeaderBottomItem>창작 플랫폼</S.HeaderBottomItem>
        </S.HeaderBottomItemLayout>
      </S.HeaderBottom>
      {isShow && (
        <S.CloseBtn
          onClick={() => {
            setIsShow(false);
          }}
        >
          <XGroup2 />
        </S.CloseBtn>
      )}
      {isShow && (
        <S.DropDownWrapper>
          <S.DropDownLayout>
            <S.FiveColBox $width="28.5rem">
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>국내도서</S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.domesticBooks.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-1`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>
                  알라딘 굿즈
                </S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.aladinGoods.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-2`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
            </S.FiveColBox>
            <S.DivLine />
            <S.FiveColBox $width="29.0rem">
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>외국도서</S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.foreignBooks.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-3`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
            </S.FiveColBox>
            <S.DivLine />
            <S.FiveColBox $width="14.3rem">
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>eBook</S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.eBooks.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-4`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
            </S.FiveColBox>
            <S.DivLine />
            <S.FiveColBox $width="14.8rem">
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>
                  온라인중고
                </S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.onlineCourses.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-5`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
            </S.FiveColBox>
            <S.DivLine />
            <S.FiveColBox $width="14.3rem">
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>음반</S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.music.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-6`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
              <S.DropDownCategoryBox>
                <S.DroptDownCategoryHeader>블루레이</S.DroptDownCategoryHeader>
                <S.DropDownCategoryBody>
                  {headerMenuCategories?.blueRay.map((cate, idx) => (
                    <S.OneCategory
                      key={`${cate}-${idx}-7`}
                      $isBold={boldCategories.has(cate)}
                    >
                      {cate}
                    </S.OneCategory>
                  ))}
                </S.DropDownCategoryBody>
              </S.DropDownCategoryBox>
            </S.FiveColBox>
          </S.DropDownLayout>
        </S.DropDownWrapper>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
