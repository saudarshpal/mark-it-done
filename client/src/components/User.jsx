import { useEffect, useState } from 'react'
import user from '../assets/user.png'
import axios from 'axios'
const User = () => {
  const [username,setUsername] = useState('')
  useEffect(()=>{
    const getUser = async()=>{
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks/user`,{
        headers : {
          Authorization : "Bearer "+localStorage.getItem('token')
        }
      })
      setUsername(response.data.user.username)
    }
    getUser()
  })
  return (
    <div className="flex flex-1 gap-3 items-center">
        <img src={user}/>
        <p className='text-white text-xl font-semibold'>{username}</p>
    </div>
  )
}

export default User