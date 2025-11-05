import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import axios from 'axios'
import { useContext } from 'react'
import TodosContext from '../context/TodosContext'



const TodoItems = ({todo}) => {
  const {fetchTodos} = useContext(TodosContext)
  return (
    <div className="flex items-center my-1.5 gap-5 mx-1 ">
        <div className='flex flex-1 gap-3 items-center  cursor-pointer' onClick={async()=>{
           try{
            await axios.put(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks/update/${todo._id}`,{
                 completed : !todo.completed
            },{
              headers :{
                Authorization : "Bearer "+ localStorage.getItem('token')
              }
            })
            fetchTodos()
           }catch(err){console.log(err)}
        }}>
          { todo.completed ? <img src={tick} alt="" className='w-5.5'/> : <img src={not_tick} alt="" className='w-5.5' />}
          { todo.completed ? <p className='text-lg font-normal text-stone-500 line-through'>{todo.title +"  :  "+ todo.description}</p>:
                             <p className='text-lg font-normal text-stone-700'>{todo.title +"  :  "+ todo.description}</p>}
        </div>


        <img src={delete_icon} alt='' className='w-6 cursor-pointer' onClick={async()=>{
             try{
              await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks/delete/${todo._id}`,{
                headers:{
                  Authorization : "Bearer "+localStorage.getItem('token')
                }
              })
              fetchTodos()
             }catch(err){console.log(err)}
        }}/>
    </div>
  )
}

export default TodoItems

