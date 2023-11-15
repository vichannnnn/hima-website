import { forwardRef, MouseEvent } from 'react';
import { Button as ButtonBase, ButtonProps, SxProps, Theme } from '@mui/material';
import './PixelButton.css';

interface ButtonBaseProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
}

export const PixelButton = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ onClick, sx, children, ...props }, ref) => {
    return (
      <ButtonBase
        sx={{
          border: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            border: 'none',
          },
          '&:focus': {
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          },
          ...sx,
        }}
        onClick={onClick}
        ref={ref}
        disableRipple
        {...props}
      >
        <div className='pixel-container'>
          <div className='pixel-grid'>
            <div className='text'>{children}</div>

            <div className='transparent'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='transparent'></div>

            <div className='black'></div>
            <div className='lightg'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='lightg'></div>
            <div className='black'></div>

            <div className='black'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='black'></div>

            <div className='black'></div>
            <div className='lightg'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className='lightg'></div>
            <div className='black'></div>

            <div className='black'></div>
            <div className='grey'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='lightg'></div>
            <div className='grey'></div>
            <div className='black'></div>

            <div className='transparent'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='black'></div>
            <div className='transparent'></div>
          </div>
        </div>
      </ButtonBase>
    );
  },
);
