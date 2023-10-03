import * as React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const InputText = ({
  name,
  control,
  placeholder,
  label,
  status,
  size,
  className,
  InputProps,
  defaultValue,
  register,
}) => (
  <Controller
    key={name}
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className={className}
        placeholder={placeholder}
        helperText={error ? error.message : null}
        error={!!error}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        label={label}
        variant="outlined"
        disabled={!status}
        size={size}
        InputProps={InputProps}
        {...register}
      />
    )}
  />
);
