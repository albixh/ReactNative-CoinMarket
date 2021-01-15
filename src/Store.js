import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import storage from 'redux-persist/lib/storage'
import { AsyncStorage } from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger)

const persistConfig = {
  key: "root",
  storage // for mobile needs storage: AsyncStorage, but is not working
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(
  persistedReducer,
  compose(
    middleware,
  )
);
const persistor = persistStore(store);

export { store, persistor };