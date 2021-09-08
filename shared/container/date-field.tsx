import { ErrorMessage } from 'formik';
import { FC, useRef } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { ErrorComponent, InputFieldProps } from './input-field';

interface DateFieldInputProps extends Omit<InputFieldProps, 'type'> {
  setValues: any;
  values: any;
  showArabic?: boolean;
  maxDate?: () => Date | string;
  minDate?: () => Date | string;
  isDisabled?: boolean;
}

export const DateFieldInput: FC<DateFieldInputProps> = ({
  inputClassName,
  name,
  title,
  setValues,
  values,
  showArabic = false,
  maxDate,
  minDate,
  isDisabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

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
          ref={dateRef}
          containerClassName="w-100"
          inputClass={inputClassName + ' ' + name}
          value={values[name] || undefined}
          multiple={false}
          format="YYYY-MM-DD"
          disabled={isDisabled}
          maxDate={maxDate ? maxDate() : ''}
          minDate={minDate ? minDate() : ''}
          onChange={(e: any) => {
            if (e instanceof DateObject) {
              setValues({ ...values, [name]: e?.format('YYYY-MM-DD') });
            } else {
              setValues({ ...values, [name]: undefined });
            }
          }}
          placeholder={showArabic ? 'حدد تاريخ' : 'Select date'}
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
