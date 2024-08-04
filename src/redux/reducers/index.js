import { combineReducers } from 'redux';
import { config } from './config';
import { loader } from './loader';
import { error } from './error';
import { post } from './post';

const rootReducer = () => {
    return combineReducers({
        loader,
        config,
        error,
        post,
    });
};

export { rootReducer };
