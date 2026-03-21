import {axiosInstance} from "../axios/axios"


const userLogin = async(data) =>{

    console.log(data);
    

    try {

        const user = await axiosInstance.post("/login",data)

        console.log(user);
        
        return user;
    } catch (error) {
        console.log(error);
        
    }

}

export {userLogin}