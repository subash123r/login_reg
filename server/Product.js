const express = require ('express');
const { getproducts, getsingleproducts } = require('./controllers/ProductController');
const router = express.Router();


router.route('/products').get(getproducts);
router.route('/product/:id').get(getsingleproducts)


module.exports = router;