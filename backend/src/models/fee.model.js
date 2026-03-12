import mongoose, { Schema } from "mongoose";
import { feeSchema } from "./feeSchema";


const feeSchema = new Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fee'
    },
    totalFee:{
        type:Number,
    },
    paidAmount:{
         type:Number,
    },
    remainingFee:{
         type:Number,
    },
      payments: [              
    {
      amount: Number,
      date: Date,
      note: String,        
    }
  ],
  
  status: String,

})


feeSchema.pre("save",function (next) {
    this.remainingFee = this.totalFee - this.paidAmount

     if (this.remainingFee <= 0) this.status = 'paid';
    else if (this.paidAmount > 0) this.status = 'partial';
    else this.status = 'pending';
  
  next();
})



export const Fee = mongoose.model('Fee', feeSchema);