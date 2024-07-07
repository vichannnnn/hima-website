import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='flex flex-col items-center mt-9 mb-6'>
      <Image width={128} height={128} src='https://image.himaa.me/hima-chan-sitting.png' alt='' />
      <p>© 2023 - 2024 Hima • Questions? Contact me at violet@himaa.me</p>
    </div>
  );
};
