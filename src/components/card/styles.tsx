import styled from 'styled-components';
import { colors } from '../../theme/palette';
import { fontSize } from '../../theme/typography';

export const StyledCard = styled.div`
  background-color: ${colors.black50};
  color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adding a shadow for depth */
`;

export const StyledHeader = styled.div`
  font-size: ${fontSize.h5};
  margin-bottom: 12px;
  display: flex !important;
  justify-content:center;
`;

export const StyledLine = styled.div`
    background: ${colors.black100};
    height: 2px;
    width: 100%;
`

export const StyledDescription = styled.div`
  font-size: ${fontSize.h6};
  margin: 15px 0;
  `;

  export const StyledButton = styled.div`
  padding: 10px;
  display: flex !important;
  justify-content: flex-end;
  `
  
  export const StyledPrice = styled.div`
  margin: 15px 0;
  font-size: ${fontSize.b1};
`;
