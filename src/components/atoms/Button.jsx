
const Button = ({children, onClick, className}) => {
    return <button onClick={onClick} className={`bg-[#0a74dc] h-[48px] text-white rounded-[6px] ${className}`}>{children}</button>
}

export default Button