const mongoose=require("mongoose")

const technicalQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intention:{
        type:String,
        required:[true,"intention is required"]
    },
    answer:{
        type:String,
        required:[true,"answer is required"]
    }
},{
    _id:false
})

const behavourialQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intention:{
        type:String,
        required:[true,"intention is required"]
    },
    answer:{
        type:String,
        required:[true,"answer is required"]
    }

},{
    _id:false
})

const skillGapSchema=new mongoose.Schema({
    skills:{
        type:String,
        required:[true,"Skill is required."]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"Severity is required"]
    }
},{
    _id:false
})

const preparationPlanSchema=new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"day is required"]
    },
    focus:{
        type:String,
        required:[true,"Focus is required"]
    },
    tasks:[{
        type:String,
        required:[true,"tasks is required"]
    }]
})
const interviewSchema=new mongoose.Schema({
    jobDescription:{
        type:String,
        required:[true,"Job description is required"]
    },
    resume:{
        type:String
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100,
    },
    technicalQuestion:[technicalQuestionSchema],
    behavourialQuestion:[behavourialQuestionSchema],
    skillGaps:[skillGapSchema],
    preparationPlan:[preparationPlanSchema]
},{
    timestamps:true
})

const interviewReportModel=mongoose.model("InterviewReport",interviewSchema)
module.exports=interviewReportModel