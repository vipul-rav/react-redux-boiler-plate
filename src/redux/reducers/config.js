import { createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../../constants/actionTypes';

const config = createReducer(
    {}, (builder) => 
    {
        builder.addCase(actionTypes.FETCH_CONFIG_SUCCESS,(state, action) => {
            return { ...state, envUrl: action.payload };
    }),
        builder.addCase(actionTypes.FETCH_CONTENT_SUCCESS, (state, action) => {
            const {payload:{response, navigate}} = action;
            return { ...state, externalContent: response,navigate };
        })
    }
);

export { config };
