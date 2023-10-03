import * as React from "react";
import { Controller } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, FormHelperText } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputPass = ({
  name,
  control,
  placeholder,
  size,
  className,
  label,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl style={{ position: "relative" }}>
      <Controller
        key={name}
        name={name}
        control={control}
        size={size}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            {/*<InputLabel sx={{ mb: 1 }} htmlFor="outlined-adornment-password">*/}
            {/*  Пароль*/}
            {/*</InputLabel>*/}
            <TextField
              className={className}
              error={Boolean(error)}
              value={value}
              size={size}
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              label={label}
            />
            <InputAdornment
              position="end"
              style={{
                zIndex: 1000,
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            <FormHelperText error>
              {error ? error.message : null}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
};
