import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
} from "@mui/material";

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MultiChecker = ({
  className,
  name,
  items,
  control,
  size,
  placeholder,
  setValue,
  label,
}) => {
  const [itemName, setItemName] = useState([]);
  const theme = useTheme();
  function getStyles(item, itemName, theme) {
    return {
      fontWeight:
        itemName.indexOf(item) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(typeof value === "string" ? value.split(",") : value);
    setValue(name, value);
  };

  return (
    <FormControl size={size}>
      <Controller
        key={name}
        name={name}
        control={control}
        render={({ field: {}, fieldState: { error } }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputLabel style={{ background: "#fff", padding: "0, 3px" }}>
              {label}
            </InputLabel>
            <Select
              label={label}
              className={className}
              error={!!error}
              size={size}
              multiple
              displayEmpty
              value={itemName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <span>{placeholder}</span>;
                }
                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                key="first"
                disabled
                style={{ display: "none" }}
                value=""
              >
                <span>{placeholder}</span>
              </MenuItem>
              {items?.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  style={getStyles(item, itemName, theme)}
                >
                  <Checkbox checked={itemName.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error>
              {error ? error.message : null}
            </FormHelperText>
          </div>
        )}
      />
    </FormControl>
  );
};
