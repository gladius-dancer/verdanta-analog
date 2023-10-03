import React, { useEffect } from "react";
import { Box, Button, CssBaseline, styled, Typography } from "@mui/material";
import AdminDrawer from "@/admin-pages/AdminDrawer/AdminDrawer";
import AdminRooms from "@/admin-pages/AdminRooms/AdminRooms";
import AdminController from "@/components/AdminController";
import { GetCurrentUserService } from "@/services/auth/AuthService";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Rooms = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    let isAuth = false;
    (async () => {
      await dispatch(
        GetCurrentUserService(localStorage.getItem("access_token")),
      );
      isAuth = await JSON.parse(localStorage.getItem("auth"));
      if (!isAuth) {
        router.push("/admin");
      }
    })();
  }, []);
  return (
    <AdminController>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AdminDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <AdminRooms />
        </Box>
      </Box>
    </AdminController>
  );
};

export default Rooms;
