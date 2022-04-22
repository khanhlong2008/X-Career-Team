const voucherController = require('../controllers/voucherContrller')
const router = require('express-promise-router')()


router.route('/')
    .post(voucherController.newVoucher)
    .get(voucherController.getAllVoucher)

router.route('/:id')
    .get(voucherController.getVoucherByID)
    .put(voucherController.updateVoucher)
    .delete(voucherController.deleteVoucher)
module.exports = router
