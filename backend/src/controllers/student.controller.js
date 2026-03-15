import {Student} from "../models/student.model.js"
import {uploadOnCloudinary} from "../utils/uploadOnCloudinary.js"


const addStudent = async (req,res)=>{
    try {

        const {name, email, password, rollNumber, mobileNumber,address,courses} = req.body;

        if(
            [name, email, password, rollNumber, mobileNumber,address,courses].some((field)=>field?.trim()==="")
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


        return res.status(200).json({
            success:true,
            student:newStudent,
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

export {addStudent}