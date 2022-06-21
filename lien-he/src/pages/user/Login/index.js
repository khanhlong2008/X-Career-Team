import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link as LInk } from "react-router-dom";
import axios from "axios";
import { Request_User } from "../../../API/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clientLogin } from "../../../Redux/Reducer/Account";
import { SettingsInputAntennaTwoTone, SettingsSystemDaydreamSharp } from "@mui/icons-material";
import { Commonfc } from "../../../Ultis/Commonfunction";
import { setAutoFreeze } from "immer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* nhét link trang chủ vô đây*/}
      <Link color="inherit" href="">
        Voucher Hunter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const info_client = useSelector((state) => state["account"]["Client"]);
  const dispatch = useDispatch();

  console.log(info_client);
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Vui lòng nhập tên đăng nhập")
      .max(16, "Tên đăng nhập có từ 6-20 kí tự!")
      .min(6, "Tên đăng nhập có từ 6-20 kí tự!"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu có từ 6-20 kí tự!")
      .max(20, "Mật khẩu có từ 6-20 kí tự!"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);

    if (data) {
      axios
        .post(Request_User.login, data)
        .then((res) => {
          if (res.status == 200) {
            dispatch(clientLogin(res.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

 
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                error={errors.username ? true : false}
                margin="normal"
                required
                fullWidth
                name="username"
                label="Tên đăng nhập"
                id="username"
                {...register("username")}
                FormHelperTextProps={{ style: { color: "red" } }}
                helperText={errors.username?.message}
              />
              <TextField
                error={errors.password ? true : false}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                {...register("password")}
                FormHelperTextProps={{ style: { color: "red" } }}
                helperText={errors.password?.message}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Nhớ mật khẩu"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* nhét link quên mật khẩu */}
                  <Link href="#" variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  {/* nhét link trang tạo tài khoản */}

                  <LInk to="/register">Chưa có tài khoản? Tạo tài khoản!</LInk>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
