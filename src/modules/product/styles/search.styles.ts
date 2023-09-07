import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const ContainerSearchProducts = styled.View`
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: ${(theme.colors.grayTheme.background)};
`;

export const Header = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${(theme.colors.orangeTheme.orange600)};
`;
