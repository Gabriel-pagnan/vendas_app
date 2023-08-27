import styled from 'styled-components/native';
import { theme } from '../../../theme/theme';
import { FontTypes } from '../../../types/fontType';


export const ContainerButton = styled.TouchableOpacity`
    width: 100%;
    padding: 14px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleButton = styled.Text`
    font-size: 19px;
    text-align: center;
    color: ${(theme.colors.netraulTheme.white)};
    text-transform: uppercase;
    font-family: ${(FontTypes.PoppinsRegular)};
`;