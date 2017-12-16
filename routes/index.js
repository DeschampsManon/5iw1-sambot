// ===== MODULES ===============================================================
const
    express = require('express'),
    router = express.Router();

// GET home page for the application
router.get('/', function(_, res) {
    res.render('./index', {});
});

export default router;