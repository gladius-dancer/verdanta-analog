import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { FormControl, FormHelperText } from "@mui/material";

export const DatePickerComponent = ({
  name,
  control,
  className,
  label,
  defaultValue,
  setValue,
}) => {
  const [date, setDate] = useState(defaultValue);

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  const handleChange = (event) => {
    setDate(event);
    setValue(name, event);
    console.log(event);
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
            <DatePicker
              label={label}
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
