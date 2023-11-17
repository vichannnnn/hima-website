import { Button } from '@components';
import { useNavigation } from '@utils';
import './Header.css';

export const ButtonsRow = () => {
  const { goToHome, goToLink, goToResume, goToBlog } = useNavigation();
  return (
    <div>
      <Button onClick={goToHome}>About</Button>
      <Button onClick={goToBlog}>Blog</Button>
      <Button onClick={goToLink}>Links</Button>
      <Button onClick={goToResume}>Resume</Button>
    </div>
  );
};
