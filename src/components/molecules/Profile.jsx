import ProfileImage from '../atoms/ProfileImg'

const Profile = () => {
    return <div className='flex justify-between items-center gap-[24px] py-0 px-8 border-l-[1px] border-[#e5e5e5]'>
     <ProfileImage className='w-[30px] h-[30px] max-w-[30px] max-h-[30px] object-cover' />
    <p className="text-[16px] text-black dark:text-white opacity-[.9]">John Doe</p>
    </div>
}

export default Profile