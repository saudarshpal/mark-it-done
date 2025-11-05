import axios from 'axios'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import WarningFooter from '../components/WarningFooter'
import Message from '../components/Message'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Signin = () => {
  const {setAuthenticated} = useContext(AuthContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div className="bg-stone-900 h-screen flex flex-row ">
        <div className="bg-orange-50 flex items-center px-8 w-120 h-screen">
          <div className='flex flex-col px-6'>
            <Heading label="SignIn"></Heading>
            <SubHeading label="Enter your credentials to access your account"></SubHeading>
            <InputBox title={"Email"} placeholder={"leoj@example.com"} onChange={e=>setEmail(e.target.value)} ></InputBox>
            <InputBox title={"Password"} placeholder={"123456"} onChange={e=>setPassword(e.target.value)}></InputBox>
            <Button buttonlabel="Sign In" onClick={async()=>{
              try{
                const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/signin`,{
                  email,password})
                localStorage.setItem('token',response.data.token)
                setAuthenticated(true)
                navigate('/homepage')
              }catch(err){console.log(err)}
              }}/>
            <WarningFooter label={"Don't have an account?"} buttonText={"SignUp"} to={"/signup"}></WarningFooter>
          </div>
        </div>
        <Message></Message>   
    </div>
  )
}

export default Signin