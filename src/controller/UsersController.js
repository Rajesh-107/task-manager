const jwt = require("jsonwebtoken");
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

exports.UserLogin = (req, res) => {
    let reqBody = req.body;
    UsersModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0, email:1, firstName:1, lastName:1, MobileNumber:1, photo:1}}
    ], (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
          } else {
            if (data.length > 0) {
              let payload = {
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                data: data[0]['email'],
              };
              let token = jwt.sign(payload, "SecretKey123456789");
        
              res.status(200).json({ status: "Success", token: token, data: data[0]});
            } else {
              res.status(401).json({ status: "Unauthorized" });
            }
          }
    })
  };

exports.profileUpdate=(req, res) => {
   
}

