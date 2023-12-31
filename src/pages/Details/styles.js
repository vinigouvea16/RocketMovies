import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devideBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 40px 106px 156px 123px;
  
  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    border: 8px solid ${({theme})=>theme.COLORS.PINK};
  }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    main{
      padding: 40px 30px;
    }
  }

  `;

export const Content = styled.div`
  margin: 0 auto;

  display:flex;
  flex-direction:column;

  button {
    color: ${({theme})=>theme.COLORS.PINK};
    background: none;
    border: none;
    font-size: 16px;
    line-height: 21px;
    gap: 8px;
    display: flex;
    align-items: center;
  }
  > h1{
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p{
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;
