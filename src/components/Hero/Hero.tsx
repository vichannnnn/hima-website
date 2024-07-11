'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('LandingPage');

  return (
    <div className='w-4/5 m-auto flex flex-col text-3xl text-center items-center mb-8 pb-64'>
      <Image
        src='https://image.himaa.me/hima-chan-posing.png'
        alt='Hima!'
        width={225}
        height={225}
      />

      <h1>
        <TypeAnimation
          sequence={[t('title_one'), 3000, t('title_two'), 3000]}
          speed={50}
          cursor={false}
          repeat={Infinity}
        />
      </h1>

      <p className='w-4/5 text-2xl mx-auto mt-8'>
        {t('description_paragraph_one')}
        <br />
        <br />
        {t('description_paragraph_two')}
        <br />
        <br />
        {t('description_paragraph_three')}
      </p>
    </div>
  );
};
