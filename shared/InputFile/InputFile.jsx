import * as React from "react";
import { Controller } from "react-hook-form";
import { Input, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import cls from "./InputFile.module.css";

export const InputFile = ({
  key,
  name,
  control,
  className,
  register,
  fileName,
}) => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <Controller
      key={key}
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <div className={cls.InputFile}>
          <img
            src={fileName?.slice(0, 4) === "http" ? fileName : imageUrl}
            className={cls.InputFile}
            alt=""
          />

          {fileName?.slice(0, 4) === "http" ? (
            <InputLabel htmlFor={name}>
              {fileName?.length > 0
                ? fileName.split("/").pop()
                : "Выберите файл"}
            </InputLabel>
          ) : (
            <InputLabel htmlFor={name}>
              {fileName?.length > 0 ? fileName : "Выберите файл"}
            </InputLabel>
          )}

          <Input
            type="file"
            id={name}
            {...register(name, {
              onChange: (e) => handleFileChange(e),
            })}
          />
          <span />
        </div>
      )}
    />
  );
};
