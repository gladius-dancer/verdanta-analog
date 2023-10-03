import Head from "next/head";
import "./i18n/i18n";
import { ToastComponent } from "@/components/Toast/ui/ToastComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserService } from "@/services/auth/AuthService";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";

function AdminController({ children, keywords }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <title>Massaget</title>
      </Head>
      <div>
        <ToastComponent />
        <Loader />
        {children}
      </div>
    </>
  );
}

export default AdminController;
