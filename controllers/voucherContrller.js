const Voucher = require("../models/voucher");

const GenerateSlug = async (name, key) => {
  let voucherdata = await Voucher.find({ title: name });

  let slugname = name.replace(/\s+/g, "");

  let count = 0;

  if (voucherdata.length != 0) {
    let result = voucherdata.filter((item) => {
      if (slugname.localeCompare(item.title.replace(/\s+/g, "")) == 0) {
        count++;
      }
    });
  }

  return `${slugname}-${key}-${count}`;
};

const voucherController = {
  newVoucher: async (req, res) => {
    try {
      const newVoucher = req.body;

      let slug = await GenerateSlug(newVoucher["title"], newVoucher["key"]);

      newVoucher.slug = slug;

      const voucher = await Voucher.create(newVoucher);
      return res.status(200).json({ msg: "Add new succes", data: voucher });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  updateVoucher: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = req.body;
      const foundVoucher = await Voucher.findByIdAndUpdate(id, voucher);
      return res.status(200).json({ success: true, foundVoucher });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteVoucher: async (req, res) => {
    try {
      const { id } = req.params;
      await Voucher.findByIdAndDelete(id);
      return res.status(200).json("Voucher deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getAllVoucher: async (req, res) => {
    try {
      const voucher = await Voucher.find();
      res.status(200).json(voucher);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getVoucherByID: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findById(id);
      return res.status(200).json(voucher);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getVoucherByPage: async (req, res) => {
    try {
      const page = req.query["page"];

      let count = await Voucher.find().countDocuments(); // counter page
      let perpage = 5;
      let total = Math.ceil(count / perpage);
      let Page = page * 1 || 0;

      const voucher = await Voucher.find()
        .skip(perpage * Page - perpage)
        .limit(perpage);

      if (page > total) {
        return res.status(404).json({ msg: "Page not found" });
      } else {
        return res.status(200).json({
          data: voucher,
          totalpage: total,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // date between  date
  getVoucherByDate: async (req, res) => {
    try {
    } catch (err) {}
  },
};
module.exports = voucherController;