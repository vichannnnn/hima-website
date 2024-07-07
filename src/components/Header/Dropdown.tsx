'use client';

import { useState, MouseEvent } from 'react';
import { Button } from '@components';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';

export const Dropdown = () => {
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
            About
          </MenuItem>
        </Link>
        <Link href='https://blog.himaa.me' passHref>
          <MenuItem>
            <ListItemIcon>
              <ArticleIcon fontSize='small' />
            </ListItemIcon>
            Blog
          </MenuItem>
        </Link>
        <Link href='/links' passHref>
          <MenuItem>
            <ListItemIcon>
              <LinkIcon fontSize='small' />
            </ListItemIcon>
            Links
          </MenuItem>
        </Link>
        <Link href='https://image.himaa.me/hima-anon-resume.pdf' passHref>
          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon fontSize='small' />
            </ListItemIcon>
            Resume
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
