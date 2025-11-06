import logout from '../assets/logout.png'
import User from '../components/User'
import TodoCreate from '../components/TodoCreate'
import TodoDashboard from '../components/TodoDashboard'
import TodosContext from '../context/TodosContext'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useTodos from '../hooks/useTodos'


const Homepage = () => {
  const {todos,fetchTodos} = useTodos()
  const {setAuthenticated} = useContext(AuthContext)
  return (
   <div className="bg-stone-900 h-screen grid grid-cols-3 items-center">
      <div className='col-span-1 flex items-center justify-center h-full'>
      <TodosContext value={{fetchTodos}}>
         <TodoCreate/>
      </TodosContext>  
      </div> 
      <div className='h-full col-span-2 flex flex-col'>
         <div className='flex flex-1 items-center p-3'>
            <User/>
            <img src={logout} alt='' className='h-6 w-6 cursor-pointer' onClick={()=>{
                 localStorage.removeItem('token')
                 setAuthenticated(false)
            }}></img>
         </div>
         <TodosContext value={{todos,fetchTodos}}>
             <TodoDashboard/>
         </TodosContext>
      </div>
   </div>
  )
}

export default Homepage