// ===== MODULES ===============================================================
import express from 'express';

const router = express.Router();

// GET home page for the application
router.get('/', (_, res) => {
  res.render('./index', {demo: process.env.DEMO, title: 'Gift Preferences'});
});

export default router;
