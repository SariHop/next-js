import axios from "axios"

export const getUsers = async ()=>{
    
   return (await axios.get('https://dummyjson.com/users')).data

}

export const getUsersById = async (id:String)=>{
    
   return (await axios.get(`https://dummyjson.com/users/${id}`)).data

}