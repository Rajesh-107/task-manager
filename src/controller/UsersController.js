const UsersModel = require("../models/UsersModel")  

exports.registartion=(req, res) => {
    let reqBody = req.body;
    UsersModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}