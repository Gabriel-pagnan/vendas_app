import styled from 'styled-components/native';
import { FontTypes } from '../../types/fontType';

interface IContainerProps {
    margin?: string
}
export const ContainerTumbnail = styled.Pressable<IContainerProps>`
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
    width: 150px;
    height: 150px;
`;

export const NameProduct = styled.Text`
    font-size: 22px;
    font-family: ${(FontTypes.PoppinsSemiBold)};
`;

export const PriceProduct = styled.Text`
    font-size: 18px;
    font-family: ${(FontTypes.PoppinsItalic)};
`;

export const InfoProduct = styled.View`
    width: 100%; 
    height: 100px;
    align-items: flex-start;
    justify-content: flex-start; 
`;

export const AddCart = styled.Pressable`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 20px;
    align-items: center;
`;
