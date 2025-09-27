import profileImage from '../../assets/Account.svg'

const ProfileImage = ({className}) => {
    return <img className={className} src={profileImage} alt='account image' />
}

export default ProfileImage