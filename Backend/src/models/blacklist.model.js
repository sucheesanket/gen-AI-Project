const mongoose=require("mongoose")

const blackListSchema=new mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token is must be added to the blacklist"]
    }
},{
    timestamps:true
})

const tokenBlackListModel=mongoose.model("blacklisttokens",blackListSchema)
module.exports=tokenBlackListModel
