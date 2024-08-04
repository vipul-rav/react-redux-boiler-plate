import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { AppRouter } from './routes';
import { compose } from 'redux';
import { shallowEqual, useSelector } from 'react-redux';
import { LoaderComponent } from './components/Loader';
import { HeaderComponent } from './components/Header';
import { ErrorComponent } from './components/Error';
import { withContent } from './hocs/withContent';
import { useNavigate } from 'react-router-dom';
import { ContentContext } from './context/contentContext';

const AppComponent = memo(function App() {
    window.navigate = useNavigate();

    const loader = useSelector((state) => state.loader, shallowEqual);
    const content = useSelector((state) => state.config.externalContent, shallowEqual);
    const error = useSelector((state) => state.error, shallowEqual);

    if (!content) {
        return null;
    }
    return (
        <div>
            <ContentContext.Provider value={content}>
                <HeaderComponent />
                <div>
                    <ErrorComponent hasError={error.showError} content={content}>
                        <AppRouter />
                        <LoaderComponent isLoading={loader.loading} text={content.loadingText} />
                    </ErrorComponent>
                </div>
            </ContentContext.Provider>
        </div>
    );
});

AppComponent.propTypes = {
    loader: PropTypes.shape({
        loading: PropTypes.bool,
    }),
    error: PropTypes.shape({
        loading: PropTypes.bool,
    }),
    content: PropTypes.object.isRequired,
};

const App = compose(withContent())(AppComponent);

export { App };
