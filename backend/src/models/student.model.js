import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:[6,"Password must be at least 6 characters long"],
        max:[20,"Password must be less than 20 characters long"]
    },
    role:{
        type:String,
        enum:["student","admin"],
        default:"user"
    },
    rollNumber:{
        type: String,
        required: true,
        unique: true
    },
    mobileNumber:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
    },
    courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ],
});

export const Student = mongoose.model('Student', studentSchema);