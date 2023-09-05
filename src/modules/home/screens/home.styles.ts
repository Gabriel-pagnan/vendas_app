import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const Tumbnail = styled.View`
    position: relative;
    width: 100%;
    height: 200px;
    background-color: ${(theme.colors.redTheme.orangeRed)};
    align-items: flex-start;
`;

export const FlatListContainer = styled.View`
    position: absolute;
    top: 35px;
    width: 100%;
    height: auto;
`;

export const IconCart = styled.Pressable`
    position: absolute;
    right: 0;
    top: 0;
    margin: 30px 20px 0 0;
`;
