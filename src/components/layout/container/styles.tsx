import { Container } from '@mui/material';
import styled, { css } from 'styled-components';
import { colors } from '../../../theme/palette';

export interface StyledContainerProps {
  centerAlign?: boolean;
  noPadding?: boolean;
}

export const StyledContainer = styled(Container)<{ noPadding?: boolean }>`
  display: flex !important;
  height: 100vh;
  ${({ noPadding }) =>
    noPadding
      ? css`
          padding: 0 !important;
        `
      : css`
          padding: 24px !important;
        `};
  min-width: 100%;
  margin: auto 0 !important;
  background: ${colors.black};
`;

export const StyledContentWrapper = styled.div<StyledContainerProps>`
  padding-left: 32px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0 !important;
    `}
`;

export const StyledSideBarContainer = styled.div`
  display: flex;
`;

export const StyledChildrenContainer = styled.div`
  /* Removed fixed height and added overflow:auto */
  overflow: auto;
  width: 100%;
`;
