const Voucher = require('../models/voucher')

const voucherController = {
    newVoucher: async (req, res) => {
        try {
            const newVoucher = req.body
            const voucher = new Voucher(newVoucher)
            await voucher.save()
            return res.status(200).json(voucher)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    updateVoucher: async (req, res) => {
        try {
            const { id } = req.params
            const voucher = req.body
            const foundVoucher = await Voucher.findByIdAndUpdate(id, voucher)
            return res.status(200).json({ success: true, foundVoucher })
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteVoucher: async (req, res) => {
        try {
            const { id } = req.params
            await Voucher.findByIdAndDelete(id)
            return res.status(200).json("Voucher deleted")
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    getAllVoucher: async (req, res) => {
        try {
            const voucher = await Voucher.find()
            res.status(200).json(voucher)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getVoucherByID: async (req, res) => {
        try {
            const { id } = req.params
            const voucher = await Voucher.findById(id)
            return res.status(200).json(voucher)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = voucherController