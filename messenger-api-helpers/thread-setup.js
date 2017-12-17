// ===== MESSENGER =============================================================
import messages from './messages';
import api from './api';

/**
 * SETUP
 *
 * Methods that should only be called at first run
 * that help set up Messenger related config
 **/

const SERVER_URL = process.env.SERVER_URL;

/**
 * Adds the server url to the Messenger App's whitelist.
 *
 * This is required to use Messenger Extensions.
 *
 * @returns {undefined}
 **/

const setDomainWhitelisting = function() {
    api.callThreadAPI(
        {
            setting_type: 'domain_whitelisting',
            whitelisted_domains: [SERVER_URL],
            domain_action_type: 'add',
        },
        {
            fields: 'whitelisted_domains',
        }
    );
};

/**
 * Sets the persistent menu for the application
 *
 * @returns {undefined}
 **/
const setPersistentMenu = function() {
    api.callThreadAPI(messages.persistentMenu);
};

/**
 * Sets the Get Started button for the application
 *
 * @returns {undefined}
 **/
const setGetStarted = function() {
    api.callThreadAPI(messages.getStarted);
};

export default {
    setDomainWhitelisting,
    setPersistentMenu,
    setGetStarted,
};
