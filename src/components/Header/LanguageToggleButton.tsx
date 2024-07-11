'use client';

import { MouseEvent, useContext, useState } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@components';
import { MediaQueryContext } from '@providers';
import { Link, usePathname } from '@/navigation';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';

interface LocaleData {
  flag: string;
  name: string;
}

const localeMap: Record<string, LocaleData> = {
  en: { flag: '🇬🇧', name: 'English' },
  ja: { flag: '🇯🇵', name: '日本語' },
};

export const LanguageToggleButton = () => {
  const currentPath = usePathname();
  const { isMedium, isXLarge } = useContext(MediaQueryContext);
  const locale = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isMedium ? (
        <>
          <Button onClick={handleClick} color='inherit'>
            {localeMap[locale].flag} {isXLarge && localeMap[locale].name}
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
              <MenuItem key={key} selected={key === locale} onClick={handleClose}>
                <Link href={currentPath} locale={key} passHref>
                  {localeMap[key].flag} {localeMap[key].name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <>
          {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
            <MenuItem key={key} selected={key === locale} onClick={handleClose}>
              <Link href={currentPath} locale={key} passHref>
                <ListItemIcon>{localeMap[key].flag}</ListItemIcon>
                {localeMap[key].name}
              </Link>
            </MenuItem>
          ))}
        </>
      )}
    </>
  );
};

export default LanguageToggleButton;
