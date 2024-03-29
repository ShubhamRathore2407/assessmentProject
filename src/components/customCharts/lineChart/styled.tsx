import styled from "styled-components";
import { colors } from "../../../theme/palette";
import { fontSize } from "../../../theme/typography";

export const StyledContainer = styled.div`
    display: inline-block;
    min-width: 247px;
    min-height: 150px;
    background: ${colors.black50};
    border-radius: 20px;
    padding: 20px;
`

export const StyledChartDetails = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.gray900};
    padding: 10px 10px 0;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const DatasetName = styled.p`
    font-size: ${fontSize.h4};
    color: ${colors.white};
    margin-bottom: 10px;
`

export const DatasetTitle = styled.p`
    font-size: ${fontSize.h4};
    color: ${colors.white};
    margin-bottom: 10px;
`

export const StyledLine = styled.div`
    background: ${colors.black100};
    height: 2px;
    width: 100%;
`

export const DataSetLegend = styled.div`
    color: ${colors.white};
`

export const Legend = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Allow legend items to wrap */
    margin: 10px 0;
    gap: 40px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SourceDescription = styled.p`
    font-size: 14px;
    line-height: 1.4;
    color: ${colors.gray300};
`
