import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";
import classNames from "classnames";

export const Dropdown = ({
  name,
  control,
  label,
  options,
  size,
  className,
}) => {
  const generateSingleOptions = () =>
    options?.map((option) => (
      <MenuItem key={option.label} value={option.label}>
        {option.label}
      </MenuItem>
    ));

  return (
    <FormControl size={size}>
      <Controller
        key={name}
        defaultValue=""
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <InputLabel>{label}</InputLabel>
            <Select
              label={label}
              className={className}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            >
              {generateSingleOptions()}
            </Select>

            <FormHelperText error>
              {error ? error.message : null}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
};
