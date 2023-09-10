import styled from 'styled-components/native';
import { theme } from '../../../../shared/theme/theme';

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


export const ContainerRegister = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 170px;
`;

export const BtnRegister = styled.Pressable`
    margin-left: 10px;
`;
export const TitleRegister = styled.Text`
    color: #313333;
    font-size: 15px;
`;

export const TitleBtn = styled.Text`
    color: ${(theme.colors.orangeTheme.orange600)};
    font-size: 16px;
    text-decoration: underline;
`;