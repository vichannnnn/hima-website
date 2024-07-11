'use client';

import { useContext } from 'react';
import Image from 'next/image';

import { MediaQueryContext } from '@/providers';
import { ButtonsRow } from './ButtonsRow';
import { Dropdown } from './Dropdown';
import { Link } from '@/navigation';
import { LanguageToggleButton } from './LanguageToggleButton';

export const Header = () => {
  const { isMedium } = useContext(MediaQueryContext);

  return (
    <header className='w-full flex justify-center items-center mx-auto'>
      <div className='w-3/5 pt-8 pb-8 flex justify-start items-center'>
        <Link className='' href='/' passHref>
          <Image
            height={128}
            width={128}
            src='https://image.himaa.me/hima-chan-original.png'
            alt='Hima!'
          />
        </Link>
        {isMedium ? (
          <div className='flex mx-auto gap-4'>
            <ButtonsRow />
            <LanguageToggleButton />
          </div>
        ) : (
          <div className='flex items-center ml-auto mr-0'>
            <Dropdown />
          </div>
        )}
      </div>
    </header>
  );
};
