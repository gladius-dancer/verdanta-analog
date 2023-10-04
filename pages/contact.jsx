import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <MainController></MainController>;
};

export default Contact;
