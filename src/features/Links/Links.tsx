import { PixelButton } from '@components';
import './Links.css';
import { useNavigation } from '@utils';

export const Links = () => {
  const { goToInstagram, goToLinkedIn, goToGitHub, goToHolyGrail } = useNavigation();

  return (
    <div className='links-container'>
      <div>
        <h1>Personal</h1>
      </div>

      <PixelButton onClick={goToInstagram}>
        <img src='https://image.himaa.me/pixel-instagram.png' alt='ig'></img> Instagram
      </PixelButton>
      <br></br>
      <PixelButton onClick={goToLinkedIn}>
        <img src='https://image.himaa.me/pixel-linkedin.png' alt='ig'></img> LinkedIn
      </PixelButton>
      <br></br>
      <PixelButton onClick={goToGitHub}>
        <img src='https://image.himaa.me/pixel-github.png' alt='ig'></img> GitHub
      </PixelButton>
      <h1>Projects</h1>
      <PixelButton onClick={goToHolyGrail}>
        <img src='https://image.himaa.me/pixel-grail.png' alt='ig'></img> Holy Grail
      </PixelButton>
    </div>
  );
};
