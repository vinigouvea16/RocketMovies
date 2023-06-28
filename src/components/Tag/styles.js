import styled from "styled-components";


export const Container = styled.span`
  display: flex;
  padding: 5px 16px;
  align-items: flex-start;
  border-radius: 5px;
  margin-right: 8px;
  font-size: 12px;
  color: ${({theme})=>theme.COLORS.GRAY};

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_1};
`;
