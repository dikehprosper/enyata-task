
import ColoredDiv from '../atoms/ColoredDiv'
import Icon from '../atoms/Icon'

const SideBarTab = ({ divBackgroundColor, title, icon = false, src, iconStyles }) => {
    return <div className='h-[48px] w-[100%] py-[15px] px-[32px] flex items-center gap-[20px]'>
        {icon ? <Icon src={src} altText={'overview icon'} className={iconStyles} /> :
            <ColoredDiv
                className="w-[16px] h-[16px] rounded-[5px]"
                backgroundColor={divBackgroundColor}
            />
        }
        <p className="text-white text-[16px] font-[600]">{title}</p>
    </div>
}

export default SideBarTab