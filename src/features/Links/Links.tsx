import FadeIn from 'react-fade-in';
import { PixelButton } from '@components';
import { useNavigation } from '@utils';
import './Links.css';

export const Links = () => {
  const { goToInstagram, goToLinkedIn, goToGitHub, goToHolyGrail } = useNavigation();

  return (
    <div className='links-container'>
      <img src='https://image.himaa.me/hima-chan-sitting.png' alt='Hima!' width='225' />
      <FadeIn>
        <h1>Personal Links</h1>
      </FadeIn>
      <div className='links-section'>
        <PixelButton onClick={goToLinkedIn}>
          <img src='https://image.himaa.me/pixel-linkedin.png' alt='ig'></img> LinkedIn
        </PixelButton>
        <br></br>
        <PixelButton onClick={goToGitHub}>
          <img src='https://image.himaa.me/pixel-github.png' alt='ig'></img> GitHub
        </PixelButton>
      </div>
      <FadeIn>
        <h1>My Projects!</h1>
      </FadeIn>
      <div className='links-section'>
        <PixelButton onClick={goToHolyGrail}>
          <img src='https://image.himaa.me/pixel-grail.png' alt='ig'></img> Holy Grail
        </PixelButton>
      </div>
    </div>
  );
};
