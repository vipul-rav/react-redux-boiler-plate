import { createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    postList: null,
    postDetail: null
};

const post = createReducer(
    initialState, (builder) => 
    {
        builder.addCase(actionTypes.FETCH_POSTS_SUCCESS,(state, action) => {
            return { ...state, postList: action.payload };
    }),
        builder.addCase(actionTypes.FETCH_POSTS_DETAILS_SUCCESS, (state, action) => {
            return { ...state, postDetail: action.payload };
        })
    }
);

export { post };
