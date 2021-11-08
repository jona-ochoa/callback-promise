//routes
const { Router } = require ('express')
const router = Router();

router.get('/test', (req, res) => {
    const data= {
        "name": "Jonatan",
        "website": "jonadev.com"
    };
    res.json(data);
});

module.exports = router;