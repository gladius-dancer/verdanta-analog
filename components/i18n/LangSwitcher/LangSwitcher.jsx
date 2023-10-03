import { useTranslation } from "next-i18next";
import React, { memo, useEffect, useState } from "react";
import classNames from "classnames";
import IconButton from "@mui/material/IconButton";
import cls from "./LangSwitcher.module.css";

const LangSwitcher = memo(({ className, short }) => {
  const [active, setActive] = useState("en-EN");
  useEffect(() => {
    setActive(localStorage.getItem("i18nextLng"));
    console.log(localStorage.getItem("i18nextLng"));
  });
  const { t, i18n } = useTranslation();

  const english = async () => {
    i18n.changeLanguage("en-EN");
    setActive("en-EN");
  };

  const russian = async () => {
    i18n.changeLanguage("ru-RU");
    setActive("ru-RU");
  };

  return (
    <div className={cls.LangSwitcher}>
      <IconButton
        onClick={english}
        className={classNames(
          "icon-button",
          active == "en-EN" ? cls.active : "",
        )}
        suppressHydrationWarning
      >
        {t("ENGLISH")}
      </IconButton>
      <IconButton
        onClick={russian}
        className={classNames(
          "icon-button",
          active == "ru-RU" ? cls.active : "",
        )}
        suppressHydrationWarning
      >
        {t("RUSSIAN")}
      </IconButton>
    </div>
  );
});

// export const LangSwitch = () => {
//   return <React.Fragment>{LangSwitcher()}</React.Fragment>;
// };

export default LangSwitcher;
