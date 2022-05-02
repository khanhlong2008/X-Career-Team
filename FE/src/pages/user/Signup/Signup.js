import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link as LInk} from 'react-router-dom'; 
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Voucher hunter.inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

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
    confirmPassword:yup
      .string()
      .required("Vui lòng xác nhận mật khẩu")
      .oneOf([yup.ref('password'), null],'Mật khẩu không khớp')

  });
  const onSubmit = data => {
    console.log(data);
  };
  const { register,control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Tên đăng nhập"
                  name="username"
                  autoComplete="username"
                  {...register('username')}      
                  FormHelperTextProps={{style:{color:'red'}}}        
                  helperText = {errors.username?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  {...register('password')}      
                  FormHelperTextProps={{style:{color:'red'}}}        
                  helperText = {errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Xác nhận mật khẩu"
                  type="password"
                  id="confirmPassword"   
                  {...register('confirmPassword')}      
                  FormHelperTextProps={{style:{color:'red'}}}        
                  helperText = {errors.confirmPassword?.message}                               
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LInk to = '/signin'><Link href="#" variant="body2">
                  Đã có tài khoản? Đăng nhập!
                </Link></LInk>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}