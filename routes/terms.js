// ===== MODULES ===============================================================
import express from 'express';

const router = express.Router();

// GET terms & conditions page for the application
router.get('/', function(_, res) {
    res.render('./index', {demo: false, terms: true, title: 'Terms & Conditions'});
});

export default router;