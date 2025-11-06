import axios from "axios"
import { useEffect, useState } from "react"


const useUsername = () => {
    const [username,setUsername] = useState('')
    const getUser = async()=>{
        try{
           const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks/user`,{
            headers : {
            Authorization : "Bearer "+localStorage.getItem('token')
            }
        })
        setUsername(response.data.user.username)
        }catch(err){console.log(err)}
    }
    useEffect(()=>{
        getUser()
    },[])
    return {username}
}

export default useUsername