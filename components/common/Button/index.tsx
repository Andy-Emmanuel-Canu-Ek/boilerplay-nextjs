import React from 'react';
import css from 'styled-jsx/css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Button = ({ text, onClick, className, disabled, type = 'primary', size = 'md' }: ButtonProps) => {
  const style = `btn btn-${type} `;

  return (
    <button type="button" className={style}>
      {text}
    </button>
  );
};

export default Button;
