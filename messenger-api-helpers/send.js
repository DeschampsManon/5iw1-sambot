// ===== LODASH ================================================================
import castArray from 'lodash/castArray';

// ===== MESSENGER =============================================================
import api from './api';
import messages from './messages';
import logger from './fba-logging';

// Turns typing indicator on.
const typingOn = function(recipientId) {
    return {
        recipient: {
            id: recipientId,
        },
        sender_action: 'typing_on', // eslint-disable-line camelcase
    };
};

// Turns typing indicator off.
const typingOff = function(recipientId) {
    return {
        recipient: {
            id: recipientId,
        },
        sender_action: 'typing_off', // eslint-disable-line camelcase
    };
};

/**
 * Wraps a message JSON object with recipient information.
**/
const messageToJSON = function(recipientId, messagePayload) {
    return {
        recipient: {
            id: recipientId,
        },
        message: messagePayload,
    };
};

/**
 * Send one or more messages using the Send API.
**/
const sendMessage = function(recipientId, messagePayloads) {
    const messagePayloadArray = castArray(messagePayloads).map((messagePayload) => messageToJSON(recipientId, messagePayload));
    api.callMessagesAPI([
            typingOn(recipientId),
            ...messagePayloadArray,
            typingOff(recipientId),
    ]);
};

// Send a read receipt to indicate the message has been read
const sendReadReceipt = function(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'mark_seen', // eslint-disable-line camelcase
    };
    api.callMessagesAPI(messageData);
};

/**
 * Send the initial message telling the user about how we can help him.
**/
const sendHelloRewardMessage = function(recipientId) {
    logger.fbLog("send_message", {payload: "hello_reward"}, recipientId);
    sendMessage(recipientId, messages.helloRewardMessage);
};

export default {
    sendMessage,
    sendReadReceipt,
    sendHelloRewardMessage,
};