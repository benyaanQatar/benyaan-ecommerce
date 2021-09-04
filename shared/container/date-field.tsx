import { ErrorMessage } from 'formik';
import { FC, useRef } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { ErrorComponent, InputFieldProps } from './input-field';

interface DateFieldInputProps extends Omit<InputFieldProps, 'type'> {
  setValues: any;
  values: any;
  showArabic?: boolean;
}

export const DateFieldInput: FC<DateFieldInputProps> = ({
  inputClassName,
  name,
  title,
  setValues,
  values,
  showArabic = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleFocus() {
    let input = ref?.current?.querySelector(
      `input.${name}`
    ) as HTMLInputElement;

    if (input) {
      input.focus();
    }
  }

  return (
    <div ref={ref} className="col form-group">
      <em style={{ fontSize: '12px' }}>
        <span> {title} </span>
      </em>
      <div>
        <DatePicker
          containerClassName="w-100"
          inputClass={inputClassName + ' ' + name}
          value={values[name]}
          multiple={false}
          onFocusedDateChange={(e) => {
            if (e instanceof DateObject) {
              setValues({ ...values, [name]: e?.format('YYYY-MM-DD') });
            }
          }}
          // locale={showArabic ? ar : en}
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
