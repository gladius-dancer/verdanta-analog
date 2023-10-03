import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const MultiLine = ({
  name,
  control,
  error,
  label,
  size,
  placeholder,
  className,
  rows,
  defaultValue,
}) => (
  <Controller
    key={name}
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        helperText={error ? error.message : null}
        size={size}
        error={!!error}
        onChange={onChange}
        value={value}
        fullWidth
        label={label}
        variant="outlined"
        multiline
        rows={rows}
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
      />
    )}
  />
);
