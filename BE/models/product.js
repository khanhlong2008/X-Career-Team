const mongoose = require("mongoose");

const Productchema = new mongoose.Schema(
    {   
         Key:{

            type:String,
            require:true,
        },
        Name: {
            type: String,
            require: true,
            min: 5,
            max: 50,
        },
        Discount:{


            typeof:Number,
            default:0
        },
        Status: {
            type: String,
            require: true,
            max: 20,
         },
        Img_url: {
            type: String,
             
        },
        Category: {
            type: Array
        },
       
        Stock:{
            type:Number,
            default:0
        },
         Price_options: {
            type: Object,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Products", Productchema);
