const SERVER_URL = process.env.SERVER_URL;

/**
 * Button for displaying the preferences menu inside a webview
 */
const setPreferencesButton = {
    type: 'web_url',
    title: 'update preferences',
    url: `${SERVER_URL}/`,
    webview_height_ratio: 'tall',
    messenger_extensions: true,
};

/**
 * Message that ask the user to update his events preferences
**/
const helloRewardMessage = {
    attachment: {
        type: 'template',
        payload: {
            template_type: 'button',
            text: 'Hey you ! We’d love to help you to find an event. First we need you to update your preferences',
            buttons: [setPreferencesButton],
        },
    },
};

/**
 * The persistent menu for users to use.
**/
const persistentMenu = {
    setting_type: 'call_to_actions',
    thread_state: 'existing_thread',
    call_to_actions: [
        setPreferencesButton,
    ],
};

/**
 * The Get Started button.
 */
const getStarted = {
    setting_type: 'call_to_actions',
    thread_state: 'new_thread',
    call_to_actions: [
        {
            payload: JSON.stringify({
                type: 'GET_STARTED',
            }),
        },
    ],
};

export default {
    helloRewardMessage,
    persistentMenu,
    getStarted,
};