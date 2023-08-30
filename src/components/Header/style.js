import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  display: flex;
  width: 100%;
  align-items: center;
  gap: 64px;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=>theme.COLORS.GRAY_300};

  >div{
    display:flex;
  }

  padding: 0 90px;
  >h2{
    color:  ${({theme})=> theme.COLORS.PINK};
  }

`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;

  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  >img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
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

export const Brand = styled.div`
  color:  ${({theme})=> theme.COLORS.PINK};
  font-size: 24px;
  font-family: Roboto Slab;
  font-weight: 700;
  padding-left: 3px;
  cursor: pointer;
`;