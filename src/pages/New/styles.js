import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/devideBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    main{
      padding: 40px 30px
    }
  }
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
  width: 90%;
  margin: 38px auto;

  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  
    >h1{
    font-weight: 400;
    font-size: 36px;
  }
    a{
      font-size: 20px;
      color: ${({theme})=> theme.COLORS.GRAY_100};
    }
  }
  
  > footer{
    display: flex;
    gap: 40px;
    margin-bottom: 40px
  }
  .inputs{
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: column;
    .inputs{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
}
`;

export const Erasemovie = styled.button`
   background-color: ${({theme})=> theme.COLORS.BACKGROUND_4};
   color: ${({theme})=> theme.COLORS.PINK};
   border: none;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    height: 56px;
    margin-top: 16px;
`;
