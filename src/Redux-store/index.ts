import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/user-reducer';
import globalReducer from './reducer/global-reducer';

export const store = configureStore({
    reducer: {
        userReducer,
        globalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
