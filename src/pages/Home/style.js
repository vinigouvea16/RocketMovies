import styled from "styled-components";
import {Link} from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_3};

  >div header{
    font-size: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 63px auto 0;
  width: 89%;
  // top: 100px;
  // position: absolute;
  // left: 90px
`;

export const NewMovie = styled(Link)`
  background-color: ${({theme})=>theme.COLORS.PINK};
    display: inline-flex;
    height: 48px;
    padding: 32px;
    gap: 8px;
    align-items: center;
    border-radius: 8px;
    color:  ${({theme})=>theme.COLORS.BACKGROUND_3};
`;