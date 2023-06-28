import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  >main{
    grid-area: content;
    overflow-y: auto;
  }
  >main a{
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.PINK};
    padding-bottom: 25px;
  }
  .tags{
    display: flex;
    flex-wrap: wrap;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_4};
    border-radius: 8px;
    margin-top: 24px;
  }

`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;

  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  
    >h1{
    font-weight: 500;
    font-size: 36px;
  }
    a{
      font-size: 20px;
      color: ${({theme})=> theme.COLORS.GRAY_100};
    }
  }
  
  > footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  .inputs{
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

export const Erasemovie = styled.button`
   background-color: ${({theme})=> theme.COLORS.BACKGROUND_4};
   border: none;
   border-radius: 8px;
   color: ${({theme})=> theme.COLORS.PINK};
   font-size: 16px;
   font-weight: 500;
   padding: 16px 200px;
   width: 700px;
   height: 56px;
   display: inline-flex;
   margin-top: 16px;
`;