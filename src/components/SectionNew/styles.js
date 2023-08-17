import styled from 'styled-components';

export const Container = styled.section`
  // margin: 28px 5%;
  // overflow-y: scroll;
  
  >h2{
    color: ${({theme})=>theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 20px;
    padding: 40px 0 0 0;
  } 

  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    /* backgroud-color: ${({theme})=>theme.COLORS.WHITE}; */
    border-radius: 10px;
    border: 8px solid ${({theme})=>theme.COLORS.PINK};
  }
`;

