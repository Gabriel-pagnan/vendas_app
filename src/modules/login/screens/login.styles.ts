import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const ContainerLogin = styled.View`
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    background-color: ${(theme.colors.grayTheme.background)};
`;

export const ImgLogo = styled.Image`
    width: 70%;
    height: 150px;
    margin: 20px;
`;
