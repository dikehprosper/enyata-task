
const Input = ({
  type,
  message,
  className,
  placeholder,
  onChange,
  value,
  width,
  height,
}) => {
  return (
    <div className="relative">
      <input
        className={ `w-full pl-[15px] border border-[#a4a7b74d] rounded-[5px] outline-none focus:border-[#0a74dc] ${className}`}
        type={type}
        onChange={onChange}
        value={value}
        style={{ height: height, width: width }}
      />
      <span className="text-red-500 leading-[18px] text-[12px] font-[500]">{message}</span>
      <label className="absolute text-[#b0b9c8] px-[3px] py-[2px] left-[8px] top-[-10px] leading-[18px] text-[12px] font-[500]">{placeholder}</label>
    </div>
  );
};

export default Input;