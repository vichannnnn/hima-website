import { PixelButton } from '@components';
import './Links.css';
import { useNavigation } from '@utils';

export const Links = () => {
  const { goToInstagram, goToLinkedIn, goToHolyGrail } = useNavigation();

  return (
    <div className='links-container'>
      <div>
        <h1>Personal</h1>
      </div>
      <PixelButton onClick={goToInstagram}>Instagram</PixelButton>
      <br></br>
      <PixelButton onClick={goToLinkedIn}>LinkedIn</PixelButton>
      <h1>Projects</h1>
      <PixelButton onClick={goToHolyGrail}>Holy Grail</PixelButton>
    </div>
  );
};
