import axios from "axios"
import { useContext, useState } from "react"
import TodosContext from "../context/TodosContext"


const TodoCreate = () => {
  const {fetchTodos} = useContext(TodosContext)
  const [title,setTitle] = useState('')
  const [descrp,setDescrp] = useState('') 
  return (
    <div className=' bg-orange-50 w-3/4 h-3/7 rounded-lg flex flex-col border '>
            <input value={title }className='text-md font-medium h-2/5 text-stone-700 bg-orange-200 outline-none placeholder:text-lg placeholder:font-medium p-5 rounded-t-lg'type="text" placeholder='title...'
               onChange={e=>setTitle(e.target.value)}/>
            <input value={descrp} className='text-md font-medium h-2/5 text-stone-700  outline-none placeholder:text-lg placeholder:font-medium p-5 rounded-t-xl' type="text" placeholder='description...'
               onChange={e=>setDescrp(e.target.value)}/>
            <div className='flex items-end justify-center h-1/5 py-3 '>
                <button className='text-white font-semibold h-8 bg-orange-700 hover:bg-orange-600 px-4 rounded-full cursor-pointer'
                     onClick={async()=>{
                       try{
                         await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/tasks`,{
                           title,
                           description : descrp
                        },{
                          headers : {
                            Authorization : "Bearer "+localStorage.getItem('token')
                          }
                        })
                        setTitle('')
                        setDescrp('')
                        fetchTodos()
                       }catch(err){console.log(err)}
                     }}>SAVE +</button>
            </div>
    </div>
  )
}

export default TodoCreate