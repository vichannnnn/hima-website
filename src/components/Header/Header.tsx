'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediaQueryContext } from '@providers';
import { ButtonsRow } from './ButtonsRow';
import { Dropdown } from './Dropdown';

export const Header = () => {
  const { isDesktop768 } = useContext(MediaQueryContext);

  return (
    <header className='w-4/5 mx-auto bg-transparent justify-between items-center'>
      <div className='pt-8 pb-8 flex flex-row justify-start items-center'>
        <Link className='' href='/' passHref>
          <Image
            height={128}
            width={128}
            src='https://image.himaa.me/hima-chan-original.png'
            alt='Hima!'
          />
        </Link>
        {isDesktop768 ? (
          <div className='flex mx-auto gap-4'>
            <ButtonsRow />
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
