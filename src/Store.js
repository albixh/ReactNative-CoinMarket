import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AsyncStorage from '@react-native-async-storage/async-storage';
//import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger)

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(
  persistedReducer,
  compose(
    middleware,
  )
);

let persistor = persistStore(
  store,
  null,
  () => {
    store.getState() // if you want to get restoredState
  }
);

export { store, persistor };