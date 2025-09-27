import Image from '../atoms/Image';

const Details = ({
  imageSrc,
  title,
  designation,
  language,
  eyeColors,
  averageLifeSpan,
  gender,
  yearOfBirth,
  skinColor,
  height,
  director,
  producer,
  releaseDate,
  model,
  passengers,
  pilots,
  name
}) => {
  return (
    <div className='flex gap-[28px]'>
      <Image imageSrc={imageSrc} className='w-[318px] h-[450px]' />
      <div className='mt-[48px]'>
        <p className="text-black text-[48px] font-[700] dark:text-white mb-[28px] leading-[40px]">
          {title || name}
        </p>

        {designation && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Designation: {designation}
          </p>
        )}

        {language && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Language: {language}
          </p>
        )}

        {eyeColors && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Eye Colors: {eyeColors}
          </p>
        )}

        {averageLifeSpan && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Average Lifespan: {averageLifeSpan}
          </p>
        )}

        {gender && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Gender: {gender}
          </p>
        )}

        {yearOfBirth && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Year of Birth: {yearOfBirth}
          </p>
        )}

        {skinColor && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Skin Color: {skinColor}
          </p>
        )}

        {height && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Height: {height}
          </p>
        )}

        {director && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Director: {director}
          </p>
        )}

        {producer && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Producer: {producer}
          </p>
        )}

        {releaseDate && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Release Date: {releaseDate}
          </p>
        )}

        {model && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Model: {model}
          </p>
        )}

        {passengers && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Passengers: {passengers}
          </p>
        )}

        {pilots && (
          <p className="text-[#434854] text-[16px] font-[500] dark:text-white">
            Pilots: {pilots}
          </p>
        )}

      </div>
    </div>
  )
}

export default Details