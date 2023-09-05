import styled from 'styled-components/native';
import { theme } from '../../../theme/theme';
import { FontTypes } from '../../../types/fontType';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 12px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: ${(theme.colors.netraulTheme.white)};
    elevation: 1;
    shadow-color: #000;
    shadow-opacity: 0.8;
`;

export const ContainerInput = styled.TextInput`
    flex: 1;
    height: 60px;
    border: 0;
    font-size: 18px;
    border-radius: 5px;
    padding: 0 10px;
    color: ${(theme.colors.grayTheme.gray800)};
    background-color: ${(theme.colors.netraulTheme.white)};
`;

export const TitleInput = styled.Text`
    width: 100%;
    align-items: flex-start;
    font-size: 18px;
    color: ${(theme.colors.grayTheme.gray200)};
`;

export const TextError = styled.Text`
    width: 100%;
    align-items: flex-start;
    font-size: 14px;
    margin: 10px 0 0 15px;
    font-family: ${(FontTypes.PoppinsItalic)};
    color: ${(theme.colors.redTheme.red200)};
`;
