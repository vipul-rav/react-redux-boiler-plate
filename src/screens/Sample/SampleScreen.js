import React, { memo, useContext, useEffect } from 'react';
import { SampleComponent } from './SampleComponent';
import { useDispatch, useSelector } from 'react-redux';
import { ContentContext } from '../../context/contentContext';
import { getPostList } from '../../redux/actions/postAction';
import { navigateToNextScreen } from '../../redux/actions/navigationAction';

const SampleScreen = memo(function Sample() {
    const dispatch = useDispatch();
    const content = useContext(ContentContext);

    useEffect(() => {
        dispatch(getPostList());
    }, [getPostList, dispatch]);

    const { postList } = useSelector((state) => state.post);

    return (
        <div>
            <h1>{content.homePageText}</h1>
            <SampleComponent postList={postList} content={content} />
            <button id="btnContinue" onClick={() => dispatch(navigateToNextScreen('/sample'))}>
                <span>{content.btnContinue}</span>
            </button>
        </div>
    );
});

export { SampleScreen };
