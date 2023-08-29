import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 99%;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  
  margin: auto;

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_1};
  cursor: pointer;
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
    display: -webkit-box; /* Define como uma caixa flexível */
    -webkit-line-clamp: 2; /* Limita a 2 linhas de texto */
    -webkit-box-orient: vertical; /* Orientação vertical da caixa flexível */
  }

  >footer{
    display: flex;
    margin-top: 24px;
    color:  ${({theme})=>theme.COLORS.GRAY_100};
  }
`;


export const Stars = styled.div`
  display: flex;
  color: ${({theme})=> theme.COLORS.PINK};
  >span{
    color: ${({theme})=> theme.COLORS.PINK}!IMPORTANT;
  }
`;

