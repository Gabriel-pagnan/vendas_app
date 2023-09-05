import styled from 'styled-components/native';
import { theme } from '../../../theme/theme';

interface ISearchProps {
    margin?: string
}

export const Container = styled.View<ISearchProps>`
    width: 300px;
    height: 45px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 12px;
    border-radius: 50px;
    margin: ${(props) => props.margin || '20px 0 0 0'};
    background-color: ${(theme.colors.netraulTheme.white)};
    elevation: 1;
    shadow-color: #000;
    shadow-opacity: 0.8;
`;


export const ContainerSearch = styled.TextInput`
    flex: 1;
    border: 0;
    font-size: 18px;
    padding: 0 10px;
    color: ${(theme.colors.grayTheme.gray800)};
    background-color: ${(theme.colors.netraulTheme.white)};
`;
