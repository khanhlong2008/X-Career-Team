const Bill = require('../models/biil')

const billController = {
    getAllBill: async (req, res) => {
        try {
            const bills = await Bill.find()
            return res.status(200).json(bills)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    getBillByID: async (req, res) => {
        try {
            const { id } = req.params
            const bill = await Bill.findById(id)
            return res.status(200).json(bill)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    createBill: async (req, res) => {
        try {
            const newBill = req.body
            const bill = new Bill(newBill)
            await Bill.save()
            return res.status(200).json(bill)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteBill: async (req, res) => {
        try {
            const { id } = req.params
            await Bill.findOneAndDelete(id)
            return res.status(200).json("Bill delete")
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    // updatePost: async (req, res) =>{
    //     try{
    //         const {id}= req.params
    //         const 
    //     }catch (err) {
    //         return res.status(500).json(err)
    //     }
    // }
}

module.exports = billController