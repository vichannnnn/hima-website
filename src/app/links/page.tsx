'use client';

import FadeIn from 'react-fade-in';
import Link from 'next/link';
import Image from 'next/image';
import { PixelButton } from '@components';

const Links = () => {
  return (
    <div className='flex flex-col items-center gap-6 mb-48'>
      <FadeIn>
        <h1 className='mt-4 mb-4'>Personal Links</h1>
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
            <p className='font-PressStart2P'>LinkedIn</p>
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
            <p className='font-PressStart2P'>GitHub</p>
          </PixelButton>
        </Link>
      </div>

      <FadeIn>
        <h1>My Projects!</h1>
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
            <p className='font-PressStart2P'>Holy Grail</p>
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Links;
