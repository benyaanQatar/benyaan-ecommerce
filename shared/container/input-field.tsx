import { ErrorMessage, Field } from 'formik';
import { FC, useEffect, useRef } from 'react';

export type inputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface InputFieldProps {
  type: inputTypes;
  name: string;
  inputClassName: string;
  title: string;
  containerClass?: string;
}

export const InputField: FC<InputFieldProps> = ({
  type,
  name,
  inputClassName,
  title,
  containerClass = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleFocus() {
    let input = ref?.current?.firstChild as HTMLInputElement;

    if (input) {
      input.focus();
    }
  }

  return (
    <div className={'form-group mb-4 ' + containerClass}>
      <label htmlFor={name}>
        <span> {title} </span>
      </label>
      <div ref={ref}>
        <Field type={type} name={name} className={inputClassName} />
      </div>

      <ErrorMessage
        name={name}
        component={({ children }) => (
          <ErrorComponent handleFocus={handleFocus}>{children}</ErrorComponent>
        )}
      />
    </div>
  );
};

export const ErrorComponent: FC<{ handleFocus(): void }> = ({
  handleFocus,
  children,
}) => {
  useEffect(() => {
    handleFocus();
  }, [handleFocus]);

  return (
    <p className="text-danger" style={{ fontSize: '12px' }}>
      {children}
    </p>
  );
};
