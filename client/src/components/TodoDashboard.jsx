import todo_icon from '../assets/todo_icon.png'
import TodoItems from '../components/TodoItems'
import { useContext } from 'react'
import TodosContext from '../context/TodosContext'


const TodoDashboard = () => {
    const {todos} = useContext(TodosContext)
    return (
        <div className="bg-orange-50 h-full rounded flex flex-col p-5">
          {/* --------------------title------------- */}
           <div className="flex items-center my-4 gap-2">
                <img  className='w-7' src={todo_icon} alt=''></img>
                <h1 className="text-2xl font-semibold">To-do List</h1>
           </div>
          {/* --------------------todo list------------- */}
           <div>
            {todos.map(todo => <TodoItems key={todo._id} todo={todo}></TodoItems>)}
           </div>
        </div>
  )
}

export default TodoDashboard