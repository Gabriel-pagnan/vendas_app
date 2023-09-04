import styled from 'styled-components/native';

interface IContainerProps {
    margin?: string
}
export const ContainerTumbnail = styled.TouchableOpacity<IContainerProps>`
    height: 160px;
    border-radius: 12px;
    flex-direction: row;
    align-items: center;
    width: 300px;
    padding: 10px;
    background-color: white;
    margin: ${(props) => props.margin || '0px'};
`;

export const ImageProduct = styled.Image`
    width: 130px;
    height: 130px;
    background-color: green;
`;
