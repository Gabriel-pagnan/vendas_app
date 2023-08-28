import { AUTHORIZATION_KEY } from '../../constants/authorizations';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = async () => await removeItemStorage(AUTHORIZATION_KEY);

export const setAthorizationToken = async (token: string) => await setItemStorage(AUTHORIZATION_KEY, token);

export const getAthorizationToken = async () => await getItemStorage(AUTHORIZATION_KEY);
