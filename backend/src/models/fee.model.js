import mongoose, { Schema } from "mongoose";



const feeSchema = new Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fee'
    },
    totalFee:{
        type:Number,
        default:0
    },
    paidAmount:{
         type:Number,
         default:0
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
  
  status: {
   type: String,
   default:"due"
  },

})


feeSchema.pre("save",function (next) {
    this.remainingFee = this.totalFee - this.paidAmount

     if (this.remainingFee <= 0) this.status = 'paid';
    else if (this.paidAmount > 0) this.status = 'partial';
    else this.status = 'pending';
  
  next();
})



export const Fee = mongoose.model('Fee', feeSchema);