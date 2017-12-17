/* ----------  External Libraries  ---------- */

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

/* ----------  Local Components  ---------- */

import App from './app.jsx';
import Oops from './oops.jsx';
import Event from './event.jsx';
import Terms from './terms.jsx';

/* ----------  Styles  ---------- */

import 'weui';
import 'react-weui/lib/react-weui.min.css';
import '../public/style.css';


// Simple initializer for attaching the Preferences App to the DOM
window.attachApp = function(userId, event) {
    /**
     * getContext is only available on iOS and Android,
     * so show an error page if userId is undefined
     */
    if (userId) {
        console.log('hey')
    } else {
        ReactDOM.render(<Oops />, document.getElementById('content'));
    }
};

// Simple initializer for attaching the Terms and Conditions to the DOM
window.attachTerms = function() {
    ReactDOM.render(<Terms />, document.getElementById('content'));
};