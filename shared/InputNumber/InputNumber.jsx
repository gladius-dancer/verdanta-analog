import * as React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import cls from "@/components/Navbar/Navbar.module.css";
import { useEffect, useState } from "react";

export const InputNumber = ({
  name,
  control,
  label,
  setValue,
  className,
  InputProps,
  defaultValue,
  onChange,
}) => {
  const [value, setAdult] = useState(defaultValue);

  const incValue = () => {
    setAdult((prev) => prev + 1);
    setValue(name, value);
    // onChange(value + 1);
  };
  const decValue = () => {
    if (value > 0) {
      setAdult((prev) => prev - 1);
      setValue(name, value);
      // onChange(value - 1);
    }
  };

  useEffect(() => {
    setValue(name, value);
  });

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field: {}, fieldState: { error } }) => (
        <>
          <TextField
            className={className}
            label={label}
            error={!!error}
            helperText={error ? error.message : null}
            value={value}
            InputProps={InputProps}
          />
          <div className={cls.IncDec}>
            <span className="plus" onClick={incValue}>
              +
            </span>
            <span className="minus" onClick={decValue}>
              -
            </span>
          </div>
        </>
      )}
    />
  );
};
