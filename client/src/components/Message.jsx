import tick from '../assets/tick.png'

const Message = () => {
  return (
    <div className='w-full justify-center flex flex-col items-center  '>
          <div className='text-left w-120' >
            <div className='text-white text-3xl font-bold flex flex-row gap-2'>
               Mark-It-Done
               <img src={tick}></img>
            </div>
            <p className='text-orange-600 text-sm font-semibold'>Stay organized. Stay productive.</p>
            <p className='text-white text-sm '>MarkItDone helps you manage tasks, projects, and priorities with a simple,
                                       distraction-free interface. Whether it’s your daily errands or long-term goals,
                                       everything you need to stay on track lives right here</p>
          </div>
          
        </div>
  )
}
export default Message