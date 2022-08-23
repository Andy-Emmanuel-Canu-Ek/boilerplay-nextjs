import clsx from 'clsx';

type InputTextProps = {
  error: any;
  type?: string;
  name: string;
  className?: string;
  placeholder?: string;
  onKeyPress?: (value: any) => void;
  register: (value: string | any) => void | any;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  error,
  placeholder,
  type = 'text',
  className = '',
  register,
  onKeyPress,
}) => {
  return (
    <>
      <input
        className={clsx('p-2 border rounded', {
          [className]: className,
          'border border-5 border-danger rounded': error,
        })}
        type={type}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        {...register(name)}
      />
      {error && <small className="form-text text-danger">{error?.message}</small>}
    </>
  );
};

export default InputText;
