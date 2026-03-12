import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    fee:{
        type:Number,
        required:true
    }
});

export const Course = mongoose.model('Course', courseSchema);