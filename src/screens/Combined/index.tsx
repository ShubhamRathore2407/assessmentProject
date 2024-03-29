import React, { useState, useEffect } from 'react';
import { Container, LineChart } from '../../components';
import { StyledContainer, StyledHeader } from './styles';
import axios from 'axios';
import { CRYPTO, mockApiData, POPULATION } from '../../api';
import { Box, Button, Grid, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Card from '../../components/card';

const formatArray = (arr: any) => {
  const response = arr.map((item: any) => ({
    year: item.Year,
    population: item.Population,
  }));
  return response.sort((a: any, b: any) => parseInt(a.year) - parseInt(b.year));
};
const Combined = () => {
  const [chartData, setChartData] = useState([]);
  const [chartDetails, setChartDetails] = useState<any>({});
  const [currencies, setCurrencies] = useState<any>({});

  useEffect(() => {
    axios
      .get(POPULATION)
      .then((response: any) => {
        setChartDetails(response?.data?.source[0]?.annotations);
        const formattedData = formatArray(response.data.data);

        setChartData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const obj = {
    x: 'Year',
    y: 'Population',
  };

  const [value, setValue] = React.useState<string>('1');

  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container heading='Combined Screen' subHeading='This screen display content from both population and crypto screen'>
      <Grid container columnGap={5} rowSpacing={5}>
        <Grid item xs={12} md={12}>
          <StyledContainer>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    borderColor: 'divider',
                    color: 'white',
                    justifyContent: 'center',
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    sx={{ justifyContent: 'space-between', marginLeft: '22%' }}
                  >
                    <Tab sx={{ color: 'white' }} label='USA' value='1' />
                    <Tab sx={{ color: 'white' }} label='India' value='2' />
                    <Tab sx={{ color: 'white' }} label='China' value='3' />
                    <Tab sx={{ color: 'white' }} label='Brazil' value='4' />
                  </TabList>
                </Box>
                <TabPanel value='1'>
                  <LineChart
                    labels={obj}
                    title={'Population Overview'}
                    details={chartDetails?.dataset_name}
                    data={chartData}
                  />
                </TabPanel>
                <TabPanel value='2'>
                  <LineChart
                    labels={obj}
                    title={'Population Overview'}
                    details={
                      mockApiData?.india?.source[0]?.annotations?.dataset_name
                    }
                    data={formatArray(mockApiData?.india?.data)}
                  />
                </TabPanel>
                <TabPanel value='3'>
                  <LineChart
                    labels={obj}
                    title={'Population Overview'}
                    details={
                      mockApiData?.china?.source[0]?.annotations?.dataset_name
                    }
                    data={formatArray(mockApiData?.china?.data)}
                  />
                </TabPanel>
                <TabPanel value='4'>
                  <LineChart
                    labels={obj}
                    title={'Population Overview'}
                    details={
                      mockApiData?.brazil?.source[0]?.annotations?.dataset_name
                    }
                    data={formatArray(mockApiData?.brazil?.data)}
                  />
                </TabPanel>
              </TabContext>
            </Box>
          </StyledContainer>
        </Grid>
        <StyledHeader>Crypto Price</StyledHeader>
        <Grid item xs={12} md={12}>
          <Grid container columnGap={5}>
            <Grid item xs={2} md={3} sm={4}>
              <Card currency={currencies?.EUR} />
            </Grid>
            <Grid item xs={2} md={3} sm={4}>
              <Card currency={currencies?.GBP} />
            </Grid>
            <Grid item xs={2} md={3} sm={4}>
              <Card currency={currencies?.USD} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Combined;
