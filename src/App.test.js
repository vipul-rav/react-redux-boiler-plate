import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { App } from './App';
import { render } from './setupTests';
import { BrowserRouter } from 'react-router-dom';

const content = {
    ExitText: 'Exit',
    btnContinue: 'Continue',
    loadingText: 'Please wait...',
};

const setup = (overridesProps) => {
    const props = {
        ...overridesProps,
    };
    const mockStore = configureMockStore();
    const store = mockStore({
        config: {
            externalContent: content,
        },
        error: {
            showError: false,
        },
        loader: {
            loading: false,
        },
    });
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>
        </Provider>
    );

    return {
        props,
        wrapper,
    };
};

describe('App ', () => {
    it('should render', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
