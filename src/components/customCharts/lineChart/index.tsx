import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledChartDetails,
  DatasetName,
  DatasetTitle,
  StyledLine,
  DataSetLegend,
  Row,
  Legend,
} from './styled';

interface ChartEntry {
  name: string;
  value: number;
}

interface LineChartProps {
  data: ChartEntry[];
  details?: any;
  title?: string;
  labels?: any;
}

const CustomLineChart: React.FC<LineChartProps> = ({
  title,
  details,
  data,
  labels,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chartWidth = windowWidth > 1200 ? 600 : windowWidth - 500;
  const chartHeight = chartWidth * 0.6; // Maintain aspect ratio

  const populationValues = data.map((entry) => entry.value);
  const minValue = Math.min(...populationValues);
  const maxValue = Math.max(...populationValues);

  const x = labels.x.toLowerCase();
  const y = labels.y.toLowerCase();
  return (
    <StyledContainer>
      <StyledChartDetails>
        <Row>
          <DatasetName>{title}</DatasetName>
          {chartWidth > 512 && <DatasetTitle>{details}</DatasetTitle>}
        </Row>
      </StyledChartDetails>
      <StyledLine />
      <LineChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ top: 50, right: 30, left: 50, bottom: 30 }}
      >
        <XAxis dataKey={x} />
        <YAxis domain={[minValue, maxValue]} />
        <Tooltip />
        <Line type='monotone' dataKey={y} stroke='#82ca9d' />
      </LineChart>
      <Legend>
        <DataSetLegend>x-axis: {labels.x}</DataSetLegend>
        <DataSetLegend>y-axis: {labels.y}</DataSetLegend>
      </Legend>
    </StyledContainer>
  );
};

export default CustomLineChart;
