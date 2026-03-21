import {Student} from "../models/student.model.js"
import {uploadOnCloudinary} from "../utils/uploadOnCloudinary.js"
import {Fee} from "../models/fee.model.js"
import jwt from "jsonwebtoken"



//login student

const studentLogin = async (req,res) =>{
    try {

        const {identifier, password} = req.body;

        // console.log(req.body);
        

        if(!identifier || !password){
            return res.status(500).json({
                sucess:false,
                message:"please enter all fields"
            })
        }
        
        
        let student;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(identifier)){

            student = await Student.findOne({email:identifier})

        }else{
            student = await Student.findOne({rollNumber: identifier})
        }

        if(!student){
            return res.status(500).json({
                sucess:false,
                message:"student is not registered"
            })
        }
        

        
        

        const isPasswordCorrect = (student.password === password)

   
        if (!isPasswordCorrect) {
            return res.status(500).json({
                sucess:false,
                message:"Invalid credentials"
            })
        }
        
        
        const accessToken = jwt.sign({id:student._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRY
        })
        
        return  res.status(200).json({
                sucess:true,
                message:"student login successfully",
                student:student,
                accessToken
            })

        
    } catch (error) {
         return res.status(500).json({
            success:false,
            student:null,
            message:error.message
        })
    }
}



// add student
const addStudent = async (req,res)=>{
    try {

        const {name, email, password, rollNumber, mobileNumber,address,courses,fee} = req.body;

        if(
            [name, email, password, rollNumber, mobileNumber,address,courses,fee].some((field)=>field?.trim()==="")
        )
        {
            res.status(500).json({
                message:"All fields are required"
            })
        }

        const student = await Student.findOne({rollNumber});

        if(student){
            res.status(500).json({
                message:"student already registered"
            })
        }

        //avatar

        const photoLocalPath = req.files?.avatar[0]?.path;

        const avatar = await uploadOnCloudinary(photoLocalPath)


        const newStudent = await Student.create({
            name,
            email,
            password,
            rollNumber,
            mobileNumber,
            address,
            avatar:avatar.url,
            courses
        })

        //fee

        const studentFee= await Fee.create({
            student:newStudent._id,
            totalFee:fee
        })



        return res.status(200).json({
            success:true,
            student:newStudent,
            fee:studentFee,
            message:"student registered sucessfully"
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            student:null,
            message:error.message
        })
    }
}

export {addStudent, studentLogin}