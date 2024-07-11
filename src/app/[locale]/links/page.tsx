'use client';

import FadeIn from 'react-fade-in';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PixelButton } from '@components';

const Links = () => {
  const t = useTranslations('Links');

  return (
    <div className='flex flex-col items-center gap-6 mb-48'>
      <FadeIn>
        <h1 className='mt-4 mb-4'>{t('personal_title')}</h1>
      </FadeIn>
      <div className='flex flex-col'>
        <Link href='https://www.linkedin.com/in/hima7459/' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-linkedin.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('linkedin')}</p>
          </PixelButton>
        </Link>
        <br></br>
        <Link href='https://www.github.com/vichannnnn' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-github.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('github')}</p>
          </PixelButton>
        </Link>
        <br></br>
        <Link href='https://www.instagram.com/plum.blossoms.in.the.snow/' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-instagram.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('instagram')}</p>
          </PixelButton>
        </Link>
      </div>

      <FadeIn>
        <h1>{t('project_title')}</h1>
      </FadeIn>
      <div className='flex flex-col'>
        <Link href='https://mugg.ing' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-grail.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('holy_grail')}</p>
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Links;
