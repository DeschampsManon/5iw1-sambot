// ===== MODULES ===============================================================
import sendApi from './send';

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

export default {
    handleReceiveMessage,
};