
const Button = ({buttonlabel,onClick}) => {
  return (
    <div className="pt-4">
        <button type="button" onClick={onClick} className="text-md text-stone-200 font-medium hover:text-white bg-orange-700 hover:bg-orange-600 px-5 py-2 w-full  rounded-sm cursor-pointer ">
            {buttonlabel}
        </button>
    </div>
  )
}

export default Button