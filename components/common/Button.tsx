import { ReactElement } from 'react';
import clsx from 'clsx';

type Position = 'top' | 'right' | 'bottom' | 'left';

type ButtonProps = {
  type?: any;
  text: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactElement;
  isLoading?: boolean;
  position?: Position;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  text,
  icon,
  className = '',
  disabled,
  isLoading,
  position = 'left',
  onClick,
}) => {
  return (
    <button
      className={clsx('py-2 px-5 btn btn-primary btn-lg rounded-pill', {
        [className]: className,
        'cursor-not-allowed': disabled || isLoading,
      })}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-between">
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <div className="pl-2">Cargando...</div>
        </div>
      ) : (
        <div
          className={clsx('d-flex align-items-center justify-content-between', {
            'flex-row-reverse': position === 'right',
          })}
        >
          {icon && icon}
          <div className="px-2">{text}</div>
        </div>
      )}
    </button>
  );
};

export default Button;
