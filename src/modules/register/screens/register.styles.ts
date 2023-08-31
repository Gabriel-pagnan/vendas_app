import styled from 'styled-components/native';
import { theme } from '../../../shared/theme/theme';

export const ContainerRegister = styled.View`
    width: 100%;
    height: 100%;
    padding: 0 16px 0 16px;
    justify-content: flex-start;
    background-color: ${(theme.colors.grayTheme.background)};
`;
export const ContainerSlider = styled.View`
    width: 100%;
    height: 550px;
    padding: 0 20px 0 20px;
`;


export const ContainerLogin = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    z-index: -10;
`;

export const BtnLogin = styled.Pressable`
    margin-left: 10px;
`;
export const TitleLogin = styled.Text`
    color: #313333;
    font-size: 15px;
`;

export const TitleBtn = styled.Text`
    color: ${(theme.colors.orangeTheme.orange600)};
    font-size: 16px;
    text-decoration: underline;
`;

export const ImageSlider = styled.Image`
    width: 250px;
    height: 250px;
`;
