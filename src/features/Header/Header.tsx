import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@components';
import './Header.css';
import { useNavigation } from '@utils';

export const Header = () => {
  const { goToHome, goToLink, goToResume, goToBlog } = useNavigation();
  return (
    <header className='header'>
      <div className='header-container'>
        <RouterLink className='nav_logo' to='/'>
          <img
            src='https://document.grail.moe/grail-chan-happy.png'
            alt='Will change next week~ Placeholder!'
          />
        </RouterLink>
        <div className='menu-container'>
          <Button onClick={goToHome}>About</Button>
          <Button onClick={goToBlog}>Blog</Button>
          <Button onClick={goToLink}>Links</Button>
          <Button onClick={goToResume}>Resume</Button>
        </div>
      </div>
    </header>
  );
};
