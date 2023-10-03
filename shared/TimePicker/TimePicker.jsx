import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import * as React from "react";
import { useEffect, useState } from "react";
import { FormHelperText } from "@mui/material";

export const TimePickerComponent = ({
  name,
  control,
  className,
  label,
  defaultValue,
  setValue,
  ampm,
}) => {
  const [date, setDate] = useState(defaultValue);

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  const handleChange = (event) => {
    setDate(event);
    setValue(name, event);
  };

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div suppressHydrationWarning>
          <LocalizationProvider
            suppressHydrationWarning
            dateAdapter={AdapterDayjs}
            adapterLocale="ru"
          >
            <TimePicker
              label={label}
              ampm={ampm}
              className={className}
              onChange={handleChange}
              value={date}
              slotProps={{ textField: { variant: "outlined", error: error } }}
            />
            <FormHelperText
              error
              style={{
                paddingLeft: "15px",
                marginTop: "5px",
                marginBottom: "4px",
              }}
            >
              {error ? error.message : null}
            </FormHelperText>
          </LocalizationProvider>
        </div>
      )}
    />
  );
};
