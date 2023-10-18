import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';
import { DEVICE_BREAKPOINTS } from '../../styles/devideBreakpoints';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */

  text-align: center;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0 auto;
    padding: 0;
  }
  >h1 {
    font-size: 48px;
    color: ${({theme})=> theme.COLORS.PINK};

  }

  >h2 {
    font-size: 24px;
    margin: 48px 0;
    display: flex;
    align-items: flex-start;
  }

  >p {
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.GRAY};
    display: flex;
    align-items: flex-start;
  }

  >a {
    margin-top: 42px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;