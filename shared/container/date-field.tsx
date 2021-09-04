import { ErrorMessage } from 'formik';
import { FC, useRef } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { ErrorComponent, InputFieldProps } from './input-field';

interface DateFieldInputProps extends Omit<InputFieldProps, 'type'> {
  setValues: any;
  values: any;
}

export const DateFieldInput: FC<DateFieldInputProps> = ({
  inputClassName,
  name,
  title,
  setValues,
  values,
}) => {
  const ref = useRef<HTMLElement>(null);

  function handleFocus() {
    let input = ref?.current;

    if (input) {
      input.focus();
    }
  }

  return (
    <div className="col form-group">
      <em style={{ fontSize: '12px' }}>
        <span> {title} </span>
      </em>
      <div>
        <DatePicker
          ref={ref}
          containerClassName="w-100"
          inputClass={inputClassName}
          value={values[name]}
          multiple={false}
          onFocusedDateChange={(e) => {
            if (e instanceof DateObject) {
              console.log(values);
              console.log(e.format('MM/DD/YYYY'));

              setValues({ ...values, [name]: e?.format('YYYY-MM-DD') });
            }
          }}
          placeholder="MM/DD/YYYY"
        />
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
