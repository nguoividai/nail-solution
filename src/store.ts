import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { sagaReducers } from './sagaReducers';

// add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const IS_DEV = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: sagaReducers,
  devTools: IS_DEV,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./', () => store.replaceReducer(sagaReducers));
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
