import React, { useEffect, useState } from "react";
import { MultiLine } from "@/shared/Multiline/MultiLine";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./AddNewsForm.module.css";
import { InputText } from "@/shared/InputText/InputText";
import { Button } from "@mui/material";
import { InputFile } from "@/shared/InputFile/InputFile";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewsService } from "@/services/news/CreateNews";
import { ChangeNewsService } from "@/services/news/ChangeNews";
import { GetFileService } from "@/services/file/GetFile";

function AddNewsForm({ mode, defaultData }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    eng_title: yup.string().required("Заголовок обязательно"),
    rus_title: yup.string().required("Заголовок обязательно"),
    eng_text: yup.string().required("Текст обязательно"),
    rus_text: yup.string().required("Текст обязательно"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "file",
  });
  const fileNames = watch("file");

  const onSubmit = (data) => {
    const translations = {
      en: { title: data.eng_title, content: data.eng_text },
      ru: { title: data.rus_title, content: data.rus_text },
    };
    let files = [];
    data?.file?.map((item) => {
      files.push(item[0]);
    });

    const formData = new FormData();
    formData.append("translations", JSON.stringify(translations));
    files.map((file) => {
      formData.append("images", file);
    });
    formData.append("staff", currentUser.id);

    if (mode === "create") {
      dispatch(CreateNewsService(formData));
    }
    if (mode === "change") {
      // dispatch(CreateNewsService(formData));
      dispatch(ChangeNewsService({ id: defaultData.id, news: formData }));
    }
  };

  useEffect(() => {
    if (mode === "change") {
      setValue("eng_title", defaultData?.eng_title);
      setValue("eng_text", defaultData?.eng_text);
      setValue("rus_title", defaultData?.rus_text);
      setValue("rus_text", defaultData?.rus_text);

      defaultData?.images?.map(async (image, index) => {
        const file = await GetFileService(image?.image);
        append(file);
      });
    } else {
      setValue("eng_title", null);
      setValue("eng_text", null);
      setValue("rus_title", null);
      setValue("rus_text", null);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.AddNews}>
      <h4>{mode === "create" ? "Добавить новость" : "Изменить новость"}</h4>
      <div className={cls.AddNewsBody}>
        <InputText
          name="eng_title"
          label="Английский заголовок"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.eng_title : ""}
        />
        <MultiLine
          name="eng_text"
          label="Английский текст"
          control={control}
          size="small"
          rows={5}
          className={cls.MultiLine}
          defaultValue={!!defaultData ? defaultData?.eng_text : ""}
        />
        <InputText
          name="rus_title"
          label="Русский заголовок"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.rus_title : ""}
        />
        <MultiLine
          name="rus_text"
          label="Русский текст"
          control={control}
          size="small"
          rows={5}
          className={cls.MultiLine}
          defaultValue={!!defaultData ? defaultData?.rus_text : ""}
        />
        <div className={cls.Files}>
          {fields.map((field, index) => (
            <div key={field.id} className={cls.FileItem}>
              <InputFile
                control={control}
                name={`file.${index}`}
                fileName={fileNames?.[index]?.[0]?.name}
                register={register}
              />
              <IconButton type="button" onClick={() => remove(index)}>
                <CloseIcon />
              </IconButton>
            </div>
          ))}
        </div>

        <Button variant="contained" onClick={() => append({ file: null })}>
          Добавить файл
        </Button>
        <Button variant="contained" type="submit">
          Публиковать
        </Button>
      </div>
    </form>
  );
}

export default AddNewsForm;
