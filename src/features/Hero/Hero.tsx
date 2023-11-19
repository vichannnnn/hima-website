import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          <TypeAnimation
            sequence={['Everything about Hima', 3000, 'Everything about Violet', 3000]}
            speed={50}
            cursor={false}
            repeat={Infinity}
          />
        </h1>
        <p className='hero-subtitle'>
          <FadeIn>
            Yahallo~ I'm Hima, currently employed full-time as a Full-Stack Software Engineer in
            Singapore.
          </FadeIn>
          <br></br>
          <FadeIn>
            I was previously a Game Designer at a local game company developing JRPG anime-style
            mobile games for two years before transitioning into Software Engineering as a freelance
            Backend Engineer!
          </FadeIn>
          <br></br>
          <FadeIn>
            I dabble in a bit of everything in both my professional and personal capacity, from
            backend, frontend to cloud, solution architecturing and DevOps, with a dash of MLOps in
            my current tenure at my full-time job.
          </FadeIn>
        </p>
      </div>
    </div>
  );
};
