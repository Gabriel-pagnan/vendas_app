import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontTypes } from '../../types/fontType';

export const ContainerModal = styled.View`
    position: absolute;
    bottom: 0;
    padding: 16px;
    height: 200px;
    width: 100%;
    background-color: ${(theme.colors.netraulTheme.white)};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    elevation: 10;
    shadow-color: #000;
    shadow-opacity: 1;
    shadow-radius: 1px;
    shadow-offset: {
        width: 0;
        height: 0;
    }
    z-index: 9;
`;

export const IconModal = styled(Ionicons)`
    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 10;
    color: ${(theme.colors.redTheme.red200)};
    font-size: 35px;
`;

export const TitleModal = styled.Text`
    font-size: 25px;
    font-family: ${(FontTypes.PoppinsRegular)};
    color: ${(theme.colors.grayTheme.gray800)};
`;

export const TextModal = styled.Text`
    font-size: 20px;
    font-family: ${(FontTypes.PoppinsRegular)};
    color: ${(theme.colors.grayTheme.gray200)};
`;
