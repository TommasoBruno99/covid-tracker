import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root.reducer';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;

export default store;