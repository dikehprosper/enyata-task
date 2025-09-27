const TableCell = ({ children, className }) => {
    return <td className={`text-[#303b54] dark:text-white font-[500] text-[16px] leading-[24px] py-[20px]  ${className}`}>{children}</td>;
  };
  
  export default TableCell;