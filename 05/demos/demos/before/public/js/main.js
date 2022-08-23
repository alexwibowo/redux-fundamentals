import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Conversion from './components/conversion.js';
import store from './stores/configureStore'; 




class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <Conversion testProps1="hello world" />
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.getElementById('container')
    );
