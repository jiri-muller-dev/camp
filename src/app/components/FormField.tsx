import React from 'react'

interface FieldProps {
  label: string
  placeholder?: string
  type?: string
  fieldName: string
  required?: boolean
  defaultValue: string | undefined
}

const FormField: React.FC<FieldProps> = ({
  label,
  placeholder = '',
  type = 'text',
  fieldName,
  defaultValue,
  required = false,
}) => {
  const inputProps = {
    type,
    placeholder,
    name: fieldName,
    defaultValue,
    required,
  }

  return (
    <>
      <label className="pr-3" htmlFor={fieldName}>
        {label}:
      </label>
      <input
        {...inputProps}
        className="mb-3 border-b-2 border-black bg-teal-100 px-1 font-mono focus:bg-green-100 sm:mb-0"
      />
    </>
  )
}

export default FormField
