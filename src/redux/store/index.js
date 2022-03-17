import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const persistConfig = {
  key: 'ArmarioPerfecto',
  storage: AsyncStorage,
  debug: __DEV__,
  blacklist: ['commonReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
