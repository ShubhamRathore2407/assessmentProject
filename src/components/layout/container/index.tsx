import React from 'react';
import {
  StyledChildrenContainer,
  StyledContainer,
  StyledContainerProps,
  StyledContentWrapper,
  StyledSideBarContainer,
} from './styles';
import Sidebar from '../sidebar';
import Header from '../header';

interface Props extends StyledContainerProps {
  children?: JSX.Element | JSX.Element[];
  hideHeader?: boolean;
  hideSidebar?: boolean;
  cardCss?: any;
  heading?:string;
  subHeading?:string;
  contentCss?: any;
}

const Container: React.FC<Props> = ({
  children,
  heading,
  subHeading,
  hideHeader,
  hideSidebar,
  noPadding,
  ...styleProps
}) => {
  return (
    <StyledContainer noPadding={noPadding} {...styleProps}>
      {!hideSidebar && (
        <StyledSideBarContainer>
          <Sidebar />
        </StyledSideBarContainer>
      )}
      <StyledContentWrapper noPadding={noPadding}>
        {!hideHeader && (
          <Header
            heading={heading}
            subHeading={subHeading}
          />
        )}
        <StyledChildrenContainer>{children}</StyledChildrenContainer>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Container;
