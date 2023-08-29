import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1121px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  
  /* margin: auto; */

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_3};

  border:none;
  border-radius: 10px;

  padding-top: 24px;
  margin-bottom: 16px;

  header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  header> h1{
    flex:1;
    text-align: left;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 36px;
    color:  ${({theme})=>theme.COLORS.WHITE};
    // padding-bottom: 24px;
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
  >.footer{
    display: flex;
    gap: 8px;
    align-items: center;
   
  }
  >.footer img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid  ${({theme})=>theme.COLORS.GRAY};
  }

  >.footer h2, h3{
    font-size: 16px;
    color: ${({theme})=>theme.COLORS.GRAY_100};
    font-weight: 400;
  }
  >.footer span{
    color:  ${({theme})=>theme.COLORS.PINK};
  }
`;


export const Stars = styled.div`
  display: flex;
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 15px;
  padding-left: 10px;
  gap: 10px;
`;