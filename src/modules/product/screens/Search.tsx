import { theme } from '../../../shared/theme/theme';
import { ScrollView, StatusBar } from 'react-native';
import Card from '../../../shared/components/card/Card';
import { useSearchProducts } from '../hooks/useSearchProducts';
import InputSearch from '../../../shared/components/inputs/search/Search';
import { ActivityIndicator } from '../../../shared/components/buttons/button.styles';
import { ContainerSearchProducts, Header, SearchProductScrollView } from '../styles/search.styles';

const Search = () => {
    const {value, loading, handleChange, handleScroll, searchProducts} = useSearchProducts();

    return (
        <>
            <Header>
                <StatusBar backgroundColor={theme.colors.orangeTheme.orange600} />
                <InputSearch
                    value={value}
                    rightIcon
                    placeholder="Buscar product..."
                    onChange={handleChange} />
            </Header>
            <ContainerSearchProducts>
                {searchProducts && searchProducts.data && (
                    <ScrollView onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                        <SearchProductScrollView>
                            {searchProducts.data.map((product) => (
                                <Card key={product.id} product={product} />
                            ))}
                        </SearchProductScrollView>
                    </ScrollView>
                )}
                {loading && <ActivityIndicator style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color={theme.colors.orangeTheme.orange600} />}
            </ContainerSearchProducts >
        </>
    );
};

export default Search;
