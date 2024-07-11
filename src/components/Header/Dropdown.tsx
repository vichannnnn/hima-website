'use client';

import { useState, MouseEvent } from 'react';
import { Button } from '@components';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTranslations } from 'next-intl';
import { Link } from '@navigation';
import { LanguageToggleButton } from './LanguageToggleButton';

export const Dropdown = () => {
  const t = useTranslations('Buttons');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='user-button-container'>
      <Button
        id='right-button'
        className='right-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'right-button',
        }}
      >
        <Link href='/' passHref>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize='small' />
            </ListItemIcon>
            {t('about')}
          </MenuItem>
        </Link>
        <Link href='https://blog.himaa.me' passHref>
          <MenuItem>
            <ListItemIcon>
              <ArticleIcon fontSize='small' />
            </ListItemIcon>
            {t('blog')}
          </MenuItem>
        </Link>
        <Link href='/links' passHref>
          <MenuItem>
            <ListItemIcon>
              <LinkIcon fontSize='small' />
            </ListItemIcon>
            {t('links')}
          </MenuItem>
        </Link>
        <Link href='https://image.himaa.me/hima-anon-resume.pdf' passHref>
          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon fontSize='small' />
            </ListItemIcon>
            {t('resume')}
          </MenuItem>
        </Link>
        <LanguageToggleButton />
      </Menu>
    </div>
  );
};
