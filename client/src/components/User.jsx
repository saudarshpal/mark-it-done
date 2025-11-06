import user from '../assets/user.png'
import useUsername from '../hooks/useUsername'


const User = () => {
  const {username} = useUsername()
  return (
    <div className="flex flex-1 gap-3 items-center">
        <img src={user}/>
        <p className='text-white text-xl font-semibold'>{username}</p>
    </div>
  )
}

export default User