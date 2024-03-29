import React from 'react';
import {
  StyledButton,
  StyledCard,
  StyledDescription,
  StyledHeader,
  StyledLine,
  StyledPrice,
} from './styles';
import { Button } from '@mui/material';

interface Props {
  currency: {
    code: string;
    symbol: string;
    rate: string;
    description: string;
  };
}

const map: any = {
  USD: '$',
  GBP: '£',
  EUR: '€',
};

const Card: React.FC<Props> = ({ currency }) => {
  return (
    <StyledCard>
      <StyledHeader>{currency?.code}</StyledHeader>
      <StyledLine />
      <StyledDescription>{currency?.description}</StyledDescription>
      <StyledPrice>
        {map[currency?.code]} {currency?.rate}
      </StyledPrice>
      <StyledLine />
      <StyledButton>
        <Button size="small" variant='contained'>Buy</Button>
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
