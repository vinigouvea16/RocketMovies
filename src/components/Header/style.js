import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/devideBreakpoints';
import { InputGroup } from '../Input/styles';

export const Container = styled.header`
  grid-area: header;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 64px;
  height: 116px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=>theme.COLORS.GRAY_300};

  >div{
    display:flex;
  }

  padding: 0 90px;
  >h2{
    color:  ${({theme})=> theme.COLORS.PINK};
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 114px;
    width: 100%;
    flex-shrink: 0;
    padding: 0 28px;
    margin: 0;
    z-index: 0;
    display: flex;
    gap: 50px;
}
:is(${InputGroup}){
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    display: none;
  }
}
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;

  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  >img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid  ${({theme})=>theme.COLORS.GRAY};
  }
 
  >div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    font-size: 14px;
    
    strong {
      color: ${({theme})=> theme.COLORS.WHITE};
      font-weight: 700;
      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        display: none;
      }
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: flex-end;
  color:  ${({theme})=> theme.COLORS.GRAY_100};
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
}
`;

export const Brand = styled.div`
  color:  ${({theme})=> theme.COLORS.PINK};
  font-size: 24px;
  font-family: Roboto Slab;
  font-weight: 700;
  padding-left: 3px;
  cursor: pointer;
`;

export const Menu = styled.button`
  all: unset;

  display: block;
  position: relative;

  border: none;
  background: none;

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @media (min-width: 578px) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
  }

  > span {
    position: absolute;
    right: -0.5rem;
    top: -0.25rem;

    display: grid;
    place-items: center;

    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.75rem;

    border-radius: 999999px;
    background-color: ${({ theme }) => theme.COLORS.RED};

    pointer-events: none;
  }
`