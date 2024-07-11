import { forwardRef, MouseEvent } from 'react';
import { Button as ButtonBase, ButtonProps, SxProps, Theme } from '@mui/material';

interface ButtonBaseProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ onClick, sx, children, ...props }, ref) => {
    return (
      <ButtonBase
        onClick={onClick}
        ref={ref}
        variant='outlined'
        sx={{
          border: 'none',
          backgroundColor: 'none',
          color: 'black',
          textTransform: 'capitalize',
          fontFamily: 'PatrickHandSC, sans-serif',
          padding: '8px 24px',
          fontSize: '20px',
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: '#aed1ca',
            border: 'none',
          },
          '&:focus': {
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          },
          ...sx,
        }}
        {...props}
      >
        <p>{children}</p>
      </ButtonBase>
    );
  },
);

Button.displayName = 'Button';
