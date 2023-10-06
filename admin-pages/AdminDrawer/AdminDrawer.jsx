import React, { useEffect } from "react";
import classNames from "classnames";
import cls from "./AdminDrawer.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChairIcon from "@mui/icons-material/Chair";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import GroupIcon from "@mui/icons-material/Group";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LogoutService } from "@/services/auth/AuthService";
import { show } from "@/store/slices/drawerSlice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AdminDrawer() {
  const theme = useTheme();
  const open = useSelector((state) => state?.drawer?.drawer);
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const showDrawer = () => {
    dispatch(show());
  };

  const logout = async () => {
    await dispatch(LogoutService());
    router.push("/admin");
  };

  useEffect(() => {
    localStorage.setItem("drawer", true);
  }, []);

  return (
    <>
      {/*<h2>pathname:- {router.pathname}</h2>*/}
      {/*<h2>query:- {router.query}</h2>*/}
      {/*<h2>asPath:- {router.asPath}</h2>*/}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={showDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hotel Massaget
          </Typography>
          <div className={cls.UserInfo}>
            <IconButton>
              <AccountCircleIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <span>{currentUser?.username}</span>
            <div className={cls.UserInfoPopup}>
              <div className={cls.PopupItem} onClick={logout}>
                Logout
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={showDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            key="news"
            disablePadding
            className={classNames(
              cls.ListItem,
              router.pathname === "/admin/news" ? cls.Active : "",
            )}
          >
            <Link href={"/admin/news"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Новости
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem
            key="users"
            disablePadding
            className={classNames(
              cls.ListItem,
              router.pathname === "/admin/users" ? cls.Active : "",
            )}
          >
            <Link href={"/admin/users"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Пользователи
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default AdminDrawer;
