import { AUTHORIZATION_KEY } from '../../constants/authorizations';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAthorizationToken = async (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAthorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);
