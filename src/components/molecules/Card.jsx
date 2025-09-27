import ColoredDiv from '../atoms/ColoredDiv'

const Card = ({ title, divBackgroundColor, update, total }) => {
   return (
      <div className='py-[23px] px-[18px] flex w-full rounded-[10px] flex-col gap-[22px] dark:shadow-[0px_4px_10px_0px_rgba(255,255,255,0.6)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
         <div className='flex justify-between items-center'>
            <p className="text-[#303b54] dark:text-white text-[16px] font-[700]">{title}</p>
            <ColoredDiv className="w-[26px] h-[26px] rounded-md" backgroundColor={divBackgroundColor} />
         </div>
         <div>
            <p className="text-[#303b54] dark:text-white text-[16px] font-[700]">{total}</p>
            <p className="text-[#00992b] dark:text-white text-[9px] font-[400]">{`${update} more than yesterday`}</p>
         </div>
      </div>
   )
}

export default Card