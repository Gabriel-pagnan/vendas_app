import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { AUTHORIZATION_KEY } from '../../constants/authorizations';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';
import { MenuURL } from '../../enums/menu-url.enum';

export const unsetAuthorizationToken = async () => await removeItemStorage(AUTHORIZATION_KEY);

export const setAthorizationToken = async (token: string) => await setItemStorage(AUTHORIZATION_KEY, token);

export const getAthorizationToken = async () => await getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
    unsetAuthorizationToken();
    navigate.reset({
        index: 0,
        routes: [{name: MenuURL.LOGIN}],
    });
};
