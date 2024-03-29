import { useState, useEffect } from 'react';
import { Container } from '../../components';
import { StyledHeader } from './styles';
import axios from 'axios';
import { CRYPTO } from '../../api';
import { Grid } from '@mui/material';
import Card from '../../components/card';

const Crypto = () => {
  const [currencies, setCurrencies] = useState<any>({});

  useEffect(() => {
    axios
      .get(CRYPTO)
      .then((response: any) => {
        setCurrencies(response?.data?.bpi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container heading='Crypto Scree' subHeading='This screen displays the crypto price in different currencies'>
      <Grid container columnGap={5} rowSpacing={5}>
        <StyledHeader>Crypto Price</StyledHeader>
        <Grid item xs={12} md={12}>
          <Grid container columnGap={5} rowGap={5}>
            <Grid item xs={3} md={3} sm={12}>
              <Card currency={currencies?.EUR} />
            </Grid>
            <Grid item xs={3} md={3} sm={12}>
              <Card currency={currencies?.GBP} />
            </Grid>
            <Grid item xs={3} md={3} sm={12}>
              <Card currency={currencies?.USD} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Crypto;
