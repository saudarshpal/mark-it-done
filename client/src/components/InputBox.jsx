const InputBox = ({title,placeholder,onChange}) => {
  return (
    <div>
      <span className='text-sm text-left text-stone-800 font-normal py-1 '>{title}</span><br></br>
      <input onChange={onChange} placeholder={placeholder} className='text-stone-700 rounded placeholder:text-stone-500 outline-none border border-stone-400 py-1 px-2 w-full'/>
    </div>
  )
}

export default InputBox