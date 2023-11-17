import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MediaQueryContext } from '@providers';
import { ButtonsRow } from './ButtonsRow';
import { Dropdown } from './Dropdown';
import './Header.css';

export const Header = () => {
  const { isDesktop768 } = useContext(MediaQueryContext);

  return (
    <header className='header'>
      <div className='header-container'>
        <RouterLink className='nav_logo' to='/'>
          <img
            src='https://document.grail.moe/grail-chan-happy.png'
            alt='Will change next week~ Placeholder!'
          />
        </RouterLink>
        {isDesktop768 ? (
          <div className='menu-container'>
            <ButtonsRow />
          </div>
        ) : (
          <div className='mobile-dropdown-container'>
            <Dropdown />
          </div>
        )}
      </div>
    </header>
  );
};
