import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
