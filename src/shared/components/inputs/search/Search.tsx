import { Container, ContainerSearch } from './search.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { DisplayCollum } from '../../../styles/globalView.styles';

interface SearchProps extends TextInputProps {
    placeholder?: string,
    margin?: string,
    rightIcon?: boolean,
    onPress: () => void
}

const Search = ({onPress, placeholder, margin, rightIcon, ...props}: SearchProps) => {
    return (
        <DisplayCollum>
            <Container margin={margin}>
                <ContainerSearch
                    {...props}
                    placeholder={placeholder}
                />

                {rightIcon && (
                    <TouchableOpacity>
                        <Ionicons onPress={onPress} name="search-outline" size={30} color={'#313333'} />
                    </TouchableOpacity>
                )}
            </Container>
        </DisplayCollum>
    );
};

export default Search;
