import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const ContainerSearchProducts = styled.View`
    padding: 16px;
    padding-bottom: 120px;
    background-color: ${(theme.colors.grayTheme.background)};
`;

export const Header = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${(theme.colors.orangeTheme.orange600)};
`;

export const SearchProductScrollView = styled.View`
    gap: 10px;
    margin-top: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
