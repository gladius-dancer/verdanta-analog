import React, { useEffect, useState } from "react";
import { MultiLine } from "@/shared/Multiline/MultiLine";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./AddRoomForm.module.css";
import { InputText } from "@/shared/InputText/InputText";
import { Button } from "@mui/material";
import { InputFile } from "@/shared/InputFile/InputFile";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { GetFileService } from "@/services/file/GetFile";
import { Dropdown } from "@/shared/Dropdown/Dropdown";
import { useRoomFormOptions } from "@/store/useRoomFormOptions";
import classNames from "classnames";
import { Toast } from "@/components/Toast/lib/Toast";
import { AddRoomService } from "@/services/rooms/AddRoomService";
import { ChangeRoomService } from "@/services/rooms/ChangeRoomService";

function AddRoomForm({ mode, defaultData }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const options = useRoomFormOptions();
  const planList = useSelector((state) => state?.plans?.plans);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    room_number: yup.string().required("Номер комнаты обязательно"),
    size: yup.string().required("Размер комнаты обязательно"),
    room_plan: yup.string().required("Тариф обязательно"),
    eng_text: yup.string().required("Описание комнаты обязательно"),
    rus_text: yup.string().required("Описание комнаты обязательно"),
  });

  const methods = useForm({ resolver: yupResolver(schema) });

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = methods;

  //setValue('bed', [..getValues('bed'), newValue])

  const {
    fields: fileArray,
    append: addFile,
    remove: deleteFile,
  } = useFieldArray({
    control,
    name: "file",
  });

  const {
    fields: bedArray,
    append: addBed,
    remove: deleteBed,
  } = useFieldArray({
    control,
    name: "bed",
  });

  const fileNames = watch("file");

  const onSubmit = (data) => {
    if (data.bed.length !== 0) {
      if (data?.bed?.[0]?.bedType !== null) {
        if (data.file.length !== 0) {
          if (data?.file?.[0]?.file !== null) {
            let files = [];
            data?.file?.map((item) => {
              files.push(item[0]);
            });
            let beds = [];
            data?.bed?.map((item) => {
              if (item?.bedType === "Одноместный") {
                beds.push({
                  bed_type: "single",
                  quantity: Number(item.quantity),
                });
              }
              if (item?.bedType === "Двухместный") {
                beds.push({
                  bed_type: "double",
                  quantity: Number(item.quantity),
                });
              }
            });

            let translations = {
              en: {
                room_type: `${options.planOptions
                  .find((item) => item?.label === data?.room_plan)
                  ?.value?.en?.toLowerCase()} ${
                  options.roomTypeOptions.find(
                    (item) => item?.label === data?.room_type,
                  )?.value?.en
                }`,
                description: data?.eng_text,
              },
              ru: {
                room_type: `${options.planOptions
                  .find((item) => item?.label === data?.room_plan)
                  ?.value?.ru?.toLowerCase()} ${
                  options.roomTypeOptions.find(
                    (item) => item?.label === data?.room_type,
                  )?.value?.ru
                }`,
                description: data.rus_text,
              },
            };

            let plan = planList?.find(
              (plan) =>
                plan?.room_type === data?.room_type &&
                plan?.room_plan === data?.room_plan,
            )?.id;

            const formData = new FormData();
            formData.append("room_number", data?.room_number);
            formData.append("size", data?.size);
            formData.append("room_plan", plan);
            formData.append("translations", JSON.stringify(translations));
            formData.append("beds", JSON.stringify(beds));

            files.map((file) => {
              formData.append("images", file);
            });

            if (mode === "create") {
              dispatch(AddRoomService(formData));
            }
            if (mode === "change") {
              // dispatch(CreateNewsService(formData));
              dispatch(
                ChangeRoomService({ id: defaultData?.id, room: formData }),
              );
            }
          } else {
            new Toast().showError("Выберите изображений!");
          }
        } else {
          new Toast().showError("Добавьте изображений!");
        }
      } else {
        new Toast().showError("Выберите тип кровати!");
      }
    } else {
      new Toast().showError("Добавьте кровати!");
    }
  };

  useEffect(() => {
    if (mode === "change") {
      setValue("room_number", defaultData?.room_number);
      setValue("size", defaultData?.size);
      setValue("room_plan", defaultData?.room_plan);
      setValue("room_type", defaultData?.room_type);
      setValue("eng_text", defaultData?.eng_text);
      setValue("rus_text", defaultData?.rus_text);

      defaultData?.beds?.map(async (bed) => {
        addBed({
          bedType: options.bedTypeOptions.find(
            (item) => item.server === bed?.bed_type,
          )?.label,
          quantity: bed?.quantity,
        });
      });

      defaultData?.images?.map(async (image, index) => {
        const file = await GetFileService(image?.image);
        addFile(file);
      });
    } else {
      setValue("room_number", null);
      setValue("size", null);
      setValue("room_plan", null);
      setValue("room_type", null);
      setValue("eng_text", null);
      setValue("rus_text", null);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.AddRoom}>
      {mode === "create" ? (
        <h4>Добавить комнату</h4>
      ) : (
        <h4>Изменить комнату</h4>
      )}
      <div className={cls.AddRoomBody}>
        <div className={classNames(cls.FormBlock, cls.LeftBlock)}>
          <InputText
            name="room_number"
            label="Номер комнаты"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData?.room_number : ""}
          />
          <InputText
            name="size"
            label="Размер комнаты(метр в квадрате)"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData?.size : ""}
          />
          <Dropdown
            name="room_plan"
            label="Тариф"
            control={control}
            className={cls.DropDown}
            options={options.planOptions}
            size="small"
          />
          <Dropdown
            name="room_type"
            label="Тип комнаты"
            control={control}
            className={cls.DropDown}
            options={options.roomTypeOptions}
            size="small"
          />
          <div className={cls.RightBlockInner}>
            <div className={cls.FormBlock}>
              {bedArray?.map((field, index) => (
                <div key={field.id} className={cls.BedItem}>
                  <InputText
                    name={`bed[${index}].quantity`}
                    label="Количество кроватей"
                    control={control}
                    size="small"
                    status={true}
                    className={cls.CountBeds}
                    // defaultValue={!!defaultData ? defaultData.eng_title : ""}
                  />
                  <Dropdown
                    name={`bed[${index}].bedType`}
                    label="Тип кровати"
                    control={control}
                    className={classNames(cls.DropDown, cls.BedType)}
                    options={options.bedTypeOptions}
                    size="small"
                  />
                  <IconButton type="button" onClick={() => deleteBed(index)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <Button
              className={cls.AddButton}
              variant="contained"
              onClick={() => addBed({ bedType: null })}
            >
              <AddCircleOutlineIcon />
              Добавить кровать
            </Button>
          </div>
        </div>
        <div className={classNames(cls.FormBlock, cls.CenterBlock)}>
          <div className={cls.AddBedBlock}>
            <MultiLine
              name="eng_text"
              label="Описание комнаты (aнглийский)"
              control={control}
              size="small"
              rows={8}
              className={cls.MultiLine}
              defaultValue={!!defaultData ? defaultData?.eng_text : ""}
            />
            <MultiLine
              name="rus_text"
              label="Описание комнаты (русский)"
              control={control}
              size="small"
              rows={9}
              className={cls.MultiLine}
              defaultValue={!!defaultData ? defaultData?.rus_text : ""}
            />
          </div>
        </div>
        <div className={classNames(cls.FormBlock, cls.RightBlock)}>
          <div className={cls.RightBlockInner}>
            <div className={cls.Files}>
              {fileArray?.map((field, index) => (
                <div key={field.id} className={cls.FileItem}>
                  <InputFile
                    control={control}
                    className={cls.InputFile}
                    name={`file.${index}`}
                    fileName={fileNames?.[index]?.[0]?.name}
                    register={register}
                  />
                  <IconButton type="button" onClick={() => deleteFile(index)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <Button
              className={cls.AddButton}
              variant="contained"
              onClick={() => addFile({ file: null })}
            >
              <AddCircleOutlineIcon />
              Добавить изображение
            </Button>
          </div>

          <Button variant="contained" type="submit">
            Добавить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddRoomForm;
