import { setUserActions } from '.';
import { UserType } from '../../../shared/types/userType';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';

export const useUserReducer = () => {
    const dispatch = useDispatch();
    const { user } = useAppSelector((state) => state.userReducer);

    const setUser = (currentUser: UserType) => {
        dispatch(setUserActions(currentUser));
    };

    return {
        user,
        setUser,
    };
};
