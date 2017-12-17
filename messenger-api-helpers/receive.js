// ===== MODULES ===============================================================
import sendApi from './send';
import logger from './fba-logging';

/**
 * handleReceiveMessage - Message Event called when a message is sent to
 * our page. The 'message' object format can vary depending on the kind
 * of message that was received.
**/
const handleReceiveMessage = function(event) {
    const message = event.message;
    const senderId = event.sender.id;
    sendApi.sendReadReceipt(senderId);
    if (message.text) {
        sendApi.sendHelloRewardMessage(senderId);
    }
};

/**
 * handleReceivePostback — Postback event handler triggered by a postback
 * action we specify on a button in a template.
**/

const handleReceivePostback = function(event) {
    const {type, data} = JSON.parse(event.postback.payload);
    const senderId = event.sender.id;
    // perform an action based on the type of payload received
    switch (type) {
        case 'GET_STARTED':
            sendApi.sendHelloRewardMessage(senderId);
            break;
        default:
            console.error(`Unknown Postback called: ${type}`);
            break;
    }
};

/**
 * handleReceiveReferral - Message Event called when a referral event is sent to
 * our page.
**/
const handleReceiveReferral = function(event) {
    const senderId = event.sender.id;
    console.log("REFERRAL ACTION");
    logger.fbLog("referral", payload, senderId);
};

export default {
    handleReceiveMessage,
    handleReceivePostback,
    handleReceiveReferral
};