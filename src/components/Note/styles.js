import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled(Link)`
  display: flex;
  width: 99%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  
  margin: auto;

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_1};

  border:none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  >h1{
    flex:1;
    text-align: left;

    font-weight: 700;
    font-size: 24px;
    color:  ${({theme})=>theme.COLORS.WHITE};
  }
  
  p{
    color:  ${({theme})=>theme.COLORS.GRAY_100};
    overflow: hidden;
    height: 56px;
  }

  >footer{
    display: flex;
    margin-top: 24px;
    color:  ${({theme})=>theme.COLORS.GRAY_100};
  }
`;


export const Rating = styled.div`
  display: flex;
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 12px;
`;