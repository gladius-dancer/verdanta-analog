import React from "react";
import { InputNumber } from "@/shared/InputNumber/InputNumber";
import cls from "./BookingForm.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Toast } from "@/components/Toast/lib/Toast";
import { addOrder } from "@/store/slices/orderSlice";
import classNames from "classnames";
import { DatePickerComponent } from "@/shared/DatePicker/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "next-i18next";
import { FormControlLabel } from "@mui/material";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/en";

function BookingForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state?.orders);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data?.checkin === undefined || data?.checkout === undefined) {
      new Toast().showError("Select date!");
    } else {
      if (
        Date.parse(new Date(data?.checkin)) < new Date().setHours(0, 0, 0, 0) ||
        Date.parse(new Date(data?.checkout)) < new Date().setHours(0, 0, 0, 0)
      ) {
        new Toast().showError("You have entered a past date!");
      } else {
        if (data?.checkin > data?.checkout) {
          new Toast().showError("Checkin must be more than checkout!");
        } else {
          if (data?.adults <= 0) {
            new Toast().showError("Min 1 adult!");
          } else {
            dispatch(addOrder({ ...data, childsData: Array(data?.childs) }));
            router.push("/select-room");
            // console.log(typeof data.checkin.$d.toString());
            // router.push("/select-rooms");
          }
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.BookingForm}>
      <div className={classNames("row", cls.Dates)}>
        <div className="mphb_sc_search-check-in-date">
          <DatePickerComponent
            suppressHydrationWarning
            className={cls.DatePicker}
            name="checkin"
            label={<label suppressHydrationWarning>{t("Check In")}</label>}
            control={control}
            defaultValue={
              dayjs(bookingData?.checkin)?.$d?.toString() === "Invalid Date"
                ? dayjs(new Date())
                : dayjs(bookingData?.checkin)
            }
            setValue={setValue}
          />
        </div>

        <div className="mphb_sc_search-check-out-date">
          <DatePickerComponent
            suppressHydrationWarning
            className={cls.DatePicker}
            name="checkout"
            label={<label suppressHydrationWarning>{t("Check Out")}</label>}
            control={control}
            defaultValue={
              dayjs(bookingData?.checkout).$d.toString() === "Invalid Date"
                ? dayjs(new Date())
                : dayjs(bookingData?.checkout)
            }
            setValue={setValue}
          />
        </div>
      </div>
      <div className={classNames("row", cls.Peoples)}>
        <div className={cls.Adults}>
          <i className={classNames("base-icon-account", cls.AdultsIcon)}></i>
          <InputNumber
            suppressHydrationWarning
            onChange={() => null}
            className={cls.InputNumber}
            control={control}
            name="adults"
            label={<label suppressHydrationWarning>{t("Adults")}</label>}
            setValue={setValue}
            defaultValue={bookingData?.adults ? bookingData?.adults : 1}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="mphb_sc_search-children">
          <div className={cls.Adults}>
            <i className={classNames("base-icon-child", cls.ChildsIcon)}></i>
            <InputNumber
              suppressHydrationWarning
              className={cls.InputNumber}
              control={control}
              name="childs"
              label={
                <label suppressHydrationWarning>
                  {t("Childs (under 6 years)")}
                </label>
              }
              setValue={setValue}
              defaultValue={bookingData?.childs ? bookingData?.childs : 0}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classNames("row", cls.OtherConfig)}>
        <div className={cls.Left}>
          <FormControlLabel
            control={<Checkbox />}
            label={<label suppressHydrationWarning>{t("Foreigner")}</label>}
          />
        </div>
        <div className={cls.Right}>
          {/*<FormControlLabel*/}
          {/*  control={<Checkbox />}*/}
          {/*  label={t("Age of children under 5 years")}*/}
          {/*/>*/}
        </div>
      </div>

      <div className="row full-with">
        <div className={cls.FormButtons}>
          <Link href="/" data-magic-cursor="link">
            <button className="button-style1" suppressHydrationWarning>
              {t("< Prev")}
            </button>
          </Link>
          <button
            suppressHydrationWarning
            type="submit"
            className="button-style1"
          >
            {t("Select room >")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
