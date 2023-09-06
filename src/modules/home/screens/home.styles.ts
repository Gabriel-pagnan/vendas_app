import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const Tumbnail = styled.View`
    position: relative;
    width: 100%;
    height: 132px;
    background-color: ${(theme.colors.redTheme.orangeRed)};
    align-items: flex-start;
`;

export const FlatListContainer = styled.View`
    position: absolute;
    top: -40px;
    width: 100%;
    height: auto;
`;

export const IconCart = styled.Pressable`
    margin-right: 0;
`;

export const ContainerSearch = styled.View`
    width: 100%;
    height: 100px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: ${(theme.colors.redTheme.orangeRed)};
`;
