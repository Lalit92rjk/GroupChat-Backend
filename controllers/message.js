const Message = require('../models/messages');
const User = require('../models/user');

const postMessage = async(req,res) => {

    let {message} = req.body;
    console.log(req.body.message);
    let userId = req.user.id;
    let username = req.user.name;
    
    Message.create({
        msg: message,username,userId
    })
    .then(result => {
        res.json({result, suc:true});
    })
    .catch(err => {
        res.json(err);
    })
};


const getUsers = (req,res) => {
    User.findAll({where:{id:req.user.id}}).then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
};



module.exports =  {
    postMessage,
    getUsers

}