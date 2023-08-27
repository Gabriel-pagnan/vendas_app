import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { UserType } from '../../../shared/types/userType';

interface UserState {
    user?: UserType
}

const initialState: UserState = {
    user: undefined,
};

export const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserActions: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;
        },
    },

});

export const { setUserActions } = userSlice.actions;

export default userSlice.reducer;
