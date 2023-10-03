import React, { useState } from "react";
import cls from "./Loader.module.css";
import { FadeLoader } from "react-spinners";
import { useSelector } from "react-redux";

const override = {
  display: "block",
  marginRight: 50,
  height: "15",
  width: "5",
  radius: "2",
};

function Loader() {
  const loading = useSelector((state) => state?.loader?.loader);
  return (
    <>
      {loading && (
        <div className={cls.Loader}>
          <FadeLoader
            color={"#1976d2"}
            loading={loading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}

export default Loader;
