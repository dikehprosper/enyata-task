const TableHeader = ({ children, className }) => {
  return <th className={`text-[#a4a7b7] font-[500] text-[16px] leading-snug text-left py-[20px] ${className}`}>{children}</th>;
};

export default TableHeader;