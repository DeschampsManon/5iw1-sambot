// ===== MODULES ===============================================================
import express from 'express';

// ===== MESSENGER =============================================================
import receiveApi from '../messenger-api-helpers/receive';

const router = express.Router();

/**
 * verify that we have the correct Webhook location for our app.
**/
router.get('/', function(req, res) {
    if (req.query['hub.verify_token'] === process.env.FB_VERIFY_TOKEN) {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Error, wrong token');
    }
});

/**
 * receive all interactions from the users of you Messenger Application.
**/
router.post('/', function(req, res) {
  res.sendStatus(200);
  const data = req.body;
  // Make sure this is a page subscription
  if (data.object === 'page') {
    // Iterate over each entry
    data.entry.forEach(function(pageEntry) {
      // Iterate over each messaging event and handle accordingly
      pageEntry.messaging.forEach(function(messagingEvent) { 
        if (messagingEvent.message) {
            receiveApi.handleReceiveMessage(messagingEvent);
        } else if (messagingEvent.postback) {
            receiveApi.handleReceivePostback(messagingEvent);
        } else if (messagingEvent.referral) {
            receiveApi.handleReceiveReferral(messagingEvent);
        } else {
            console.log('Webhook received unknown messagingEvent: ', messagingEvent);
        }
      });
    });
  }
});

export default router;
