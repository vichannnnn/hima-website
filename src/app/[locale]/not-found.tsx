import { Link } from '@navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@components';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <>
      <div className='w-4/5 flex flex-col mx-auto items-center text-center'>
        <h1 className='mt-4 mb-12'>{t('title')}</h1>
        <Image
          src='https://image.himaa.me/hima-chan-posing.png'
          alt='Hima!'
          width={225}
          height={225}
        />
        <div className='flex flex-col items-center'>
          <p className='text-xl mt-16 mb-16'>{t('description')}</p>
        </div>
        <Link href='/' passHref>
          <Button>{t('back_to_home')}</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
