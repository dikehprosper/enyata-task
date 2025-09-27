import profileImage from '../../assets/account.svg'

const ProfileImage = ({className}) => {
    return <img className={className} src={profileImage} alt='account image' />
}

export default ProfileImage