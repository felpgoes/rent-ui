import storage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'root',
            storage,
            whitelist: [],
        },
        reducers
    );

    return persistedReducer;
};
