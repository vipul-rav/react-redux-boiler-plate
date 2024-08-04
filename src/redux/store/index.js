import { configureStore,Tuple } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'
import { apiUrlMiddleware } from '../../middlewares/apiUrlMiddleware';
import { historyMiddleware } from '../../middlewares/historyMiddleware';
import { rootReducer } from '../reducers';

const allMiddleware = [thunk,apiUrlMiddleware, historyMiddleware];

export const store = configureStore({
    reducer: rootReducer(),
    middleware:() => new Tuple(...allMiddleware),
    devTools: { name: 'Web App' }
});

if (module.hot) {
    module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer());
    });
}
