'use client';

import Image from 'next/image';
import FadeIn from 'react-fade-in';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
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
          sequence={['Everything about Hima', 3000, 'Everything about Violet', 3000]}
          speed={50}
          cursor={false}
          repeat={Infinity}
        />
      </h1>
      <FadeIn>
        <p className='w-4/5 text-2xl mx-auto mt-8'>
          Yahallo~ I&apos;m Hima, currently employed full-time as a Full-Stack Software Engineer in
          Singapore.
          <br></br>
          <br></br>I was previously a Game Designer at a local game company developing JRPG
          anime-style mobile games for two years before transitioning into Software Engineering as a
          freelance Backend Engineer!
          <br></br>
          <br></br>I dabble in a bit of everything in both my professional and personal capacity,
          from backend, frontend to cloud, solution architecturing and DevOps, with a dash of MLOps
          in my current tenure at my full-time job.
        </p>
      </FadeIn>
    </div>
  );
};
