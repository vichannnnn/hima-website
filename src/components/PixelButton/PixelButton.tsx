import { forwardRef, MouseEvent } from 'react';
import { Button as ButtonBase, ButtonProps, SxProps, Theme } from '@mui/material';
import './PixelButton.css';

interface ButtonBaseProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
}

export const PixelButton = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ onClick, sx, children, ...props }, ref) => {
    const horizontalGrid = (length: number, color: string) => {
      return new Array(length)
        .fill(null)
        .map((_, index) => <div key={index} className={color}></div>);
    };

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

            <div className='corner top-left'></div>
            {horizontalGrid(18, 'black top')}
            <div className='corner top-right'></div>

            <div className='black'></div>
            {horizontalGrid(18, 'white')}
            <div className='black'></div>

            <div className='black'></div>
            {horizontalGrid(18, 'white')}
            <div className='black'></div>

            <div className='black'></div>
            {horizontalGrid(18, 'white')}
            <div className='black'></div>

            <div className='black'></div>
            {horizontalGrid(18, 'white')}
            <div className='black'></div>

            <div className='corner bottom-left'></div>
            {horizontalGrid(18, 'black bottom')}
            <div className='corner bottom-right'></div>
          </div>
        </div>
      </ButtonBase>
    );
  },
);
