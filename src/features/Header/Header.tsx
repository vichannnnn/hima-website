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
          <img src='https://image.himaa.me/hima-chan-original.png' alt='Hima!' />
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
