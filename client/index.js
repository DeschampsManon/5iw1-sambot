/* ----------  External Libraries  ---------- */

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

/* ----------  Local Components  ---------- */

import Oops from './oops.jsx';
import Terms from './terms.jsx';

/* ----------  Styles  ---------- */

import 'weui';
import 'react-weui/lib/react-weui.min.css';
import '../public/style.css';


// Simple initializer for attaching the Preferences App to the DOM
window.attachApp = function(userId, gift) {
    /**
     * getContext is only available on iOS and Android,
     * so show an error page if userId is undefined
     */
    if (userId) {
        console.log('no problem');
    } else {
        ReactDOM.render(<Oops />, document.getElementById('content'));
    }
};

// Simple initializer for attaching the Terms and Conditions to the DOM
window.attachTerms = function() {
    ReactDOM.render(<Terms />, document.getElementById('content'));
};