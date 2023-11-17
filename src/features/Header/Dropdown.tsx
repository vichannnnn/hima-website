import { useState, MouseEvent } from 'react';
import { Button } from '@components';
import { useNavigation } from '@utils';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';

export const Dropdown = () => {
  const { goToHome, goToLink, goToResume, goToBlog } = useNavigation();
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
        <MenuItem onClick={goToHome}>
          <ListItemIcon>
            <InfoIcon fontSize='small' />
          </ListItemIcon>
          About
        </MenuItem>
        <MenuItem onClick={goToBlog}>
          <ListItemIcon>
            <ArticleIcon fontSize='small' />
          </ListItemIcon>
          Blog
        </MenuItem>
        <MenuItem onClick={goToLink}>
          <ListItemIcon>
            <LinkIcon fontSize='small' />
          </ListItemIcon>
          Links
        </MenuItem>
        <MenuItem onClick={goToResume}>
          <ListItemIcon>
            <DescriptionIcon fontSize='small' />
          </ListItemIcon>
          Resume
        </MenuItem>
      </Menu>
    </div>
  );
};
