import { ErrorMessage, Field } from "formik";
import React from "react";
interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

const FormikInput: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-dark-black"
      >
        {label}
      </label>
      <div className="relative mt-1">
        <Field
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`grow-0 block w-full rounded-md border-0 px-2 py-1.5 text-dark-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-paragraph focus:outline-none sm:text-sm sm:leading-6 ${
            error && touched ? "border-error" : ""
          }`}
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-xs text-error"
      />
    </div>
  );
};

export default FormikInput;
