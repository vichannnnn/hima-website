import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <div className='flex w-4/5 m-auto text-center flex-col items-center mt-9 mb-6'>
      <Image width={128} height={128} src='https://image.himaa.me/hima-chan-sitting.png' alt='' />
      <p>
        © 2023 - {year} • {t('text')}
      </p>
    </div>
  );
};
