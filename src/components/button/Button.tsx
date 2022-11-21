import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  shape?: 'circle' | 'normal';
  color?: 'primary' | 'link' | 'white' | 'grey';
  size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, shape, color, size, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`button link ${shape === 'circle' ? 'circle' : ''} ${color || ''} ${size || ''}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
