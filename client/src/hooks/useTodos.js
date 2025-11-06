import axios from "axios"
import { useEffect, useState } from "react"


const useTodos = () => {
  const [todos,setTodos] = useState([])
  const fetchTodos = async()=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks`,{
            headers : {
                Authorization : "Bearer "+localStorage.getItem('token')
            }
        })
        setTodos(response.data.tasks)
    }catch(err){console.log(err)} 
  }
  useEffect(()=>{
    fetchTodos()
  },[])
  return {todos,fetchTodos}
}

export default useTodos