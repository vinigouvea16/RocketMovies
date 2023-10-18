import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/devideBreakpoints'

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};
	color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    grid-area: none;
    position: absolute;
    display: flex;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open='true'] {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 116px;
  padding: 15px;
  gap: 16px;
  flex-direction: row-reverse;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.PINK};
`

export const Button = styled.button`
  display: block;
  border: none;
  background: transparent;
  padding-top: 8px;
  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  span {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_TAG};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }
  span svg{
    margin: 10px;
    color: ${({theme})=> theme.COLORS.PINK}
  }
`