import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  display: flex;
  width: 100%;
  padding: 24px 123px;
  align-items: center;
  gap: 64px;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=>theme.COLORS.GRAY_300};


  padding: 0 80px;
  >h2{
    color:  ${({theme})=> theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  flex-direction: row-reverse;

  height: 68px;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  >img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid  ${({theme})=>theme.COLORS.GRAY};
  }
 
  >div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    font-size: 14px;
    
    strong {
      color: ${({theme})=> theme.COLORS.WHITE};
      font-weight: 700;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: flex-end;
  color:  ${({theme})=> theme.COLORS.GRAY_100};
`;

export const Brand = styled(Link)`
  color:  ${({theme})=> theme.COLORS.PINK};
  font-size: 24px;
  font-family: Roboto Slab;
  font-weight: 700;
`;