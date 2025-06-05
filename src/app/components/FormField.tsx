import React from "react";

interface FormData {
  [key: string]: string;
}

interface FieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  fieldName: string;
  required?: boolean;
  data: FormData;
  onChange: any;
}

const FormField: React.FC<FieldProps> = ({
  label,
  placeholder = "",
  type = "text",
  fieldName,
  required = false,
  data,
  onChange,
}) => {
  const inputProps = {
    type,
    placeholder,
    name: fieldName,
    required,
    value: data[fieldName],
    onChange: onChange,
  };

  return (
    <>
      <label className="pr-3">{label}:</label>
      <input
        {...inputProps}
        className="bg-teal-100 focus:bg-green-100 border-b-2 border-black px-1 mb-3 sm:mb-0 font-mono"
      />
    </>
  );
};

export default FormField;
