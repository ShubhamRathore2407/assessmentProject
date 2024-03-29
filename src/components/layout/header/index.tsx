import React from 'react';
import {
  StyledContainer,
  StyledHeaderInfoContainer,
  StyledHeadingContainer,
  StyledHeadingText,
  StyledSubHeadingText,
} from './styles';

export interface Props {
  heading?: string;
  subHeading?: string;
}

const Header: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <>
      <StyledContainer>
        <StyledHeaderInfoContainer>
          {heading && (
            <StyledHeadingContainer>
              <StyledHeadingText variant='h2'>{heading}</StyledHeadingText>
            </StyledHeadingContainer>
          )}
          {subHeading && (
            <StyledHeadingContainer>
              <StyledSubHeadingText variant='h6'>{subHeading}</StyledSubHeadingText>
            </StyledHeadingContainer>
          )}
        </StyledHeaderInfoContainer>
      </StyledContainer>
    </>
  );
};

export default Header;
