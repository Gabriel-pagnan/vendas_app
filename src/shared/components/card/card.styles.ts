import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { FontTypes } from '../../types/fontType';

export const ContainerCard = styled.Pressable`
    height: 250px;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 180px;
    padding: 10px;
    background-color: ${(theme.colors.netraulTheme.white)};

    elevation: 1;
    shadow-color: #000;
    shadow-opacity: 0.8;
`;

export const InfoCard = styled.View`
    width: 100%; 
    height: 100px;
    align-items: flex-start;
    justify-content: flex-start; 
`;

export const ProductName = styled.Text`
    width: 100%;
    font-size: 18px;
    color: ${(theme.colors.grayTheme.gray800)};
    font-family: ${(FontTypes.PoppinsSemiBold)};
`;
