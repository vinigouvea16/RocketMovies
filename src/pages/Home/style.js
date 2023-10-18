import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devideBreakpoints";
export const Container = styled.div`
  width: 100%;
  /* display: grid; */
  height: 100vh;
  grid-template-rows: 105px auto;
  /* grid-template-rows: auto 1fr; */
  grid-template-areas: 
  'menu header'
  'menu content'
  'menu section';
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_3};
  overflow-x: hidden;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'content'
      'section';
    overflow-x: hidden;
  }

  >div header{
    font-size: 32px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: space-between;
  margin: 63px auto 0;
  width: 89%;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    display: flex;
    align-items: center;
    flex-direction: column;
    header{
      padding-bottom: 20px;
    }
  }
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