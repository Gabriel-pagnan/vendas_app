import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const Tumbnail = styled.View`
    position: relative;
    width: 100%;
    height: 180px;
    background-color: ${(theme.colors.orangeTheme.orange600)};
`;

export const FlatListContainer = styled.View`
    position: absolute;
    top: 35px;
    width: 100%;
    height: auto;
`;
