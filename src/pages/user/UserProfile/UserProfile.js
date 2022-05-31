import * as React from 'react';
import { useState as UseState } from 'react';
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link as LInk } from 'react-router-dom';
import { useForm as UseForm } from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Autocomplete } from '@mui/material';
import moment from "moment";
import "./UserProfile.css";
import { useState } from 'react';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { DateRangePicker, DateRange, DateRangeDelimiter } from "@material-ui/pickers";
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

export default function userProfile() {

  const [selectedDateMUIformated, getselectedDateMUIformated] = UseState(new Date());
  const [selectedDate, getSelectedDate] = UseState(moment(selectedDateMUIformated).format('DD-MM-yyyy'));
  const [selectedGender, getGender] = UseState();
  const gendersOptions = [

    { label: 'Nam', gender: "male" },
    { label: 'Nữ', gender: 'female' }
  ]
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Vui lòng nhập họ!")
      .matches(/^[aA-zZ\s]+$/, "Có chứa ký tự không hợp lệ!")
      .min(1, "Độ dài từ 1-20 kí tự!")
      .max(20, "Độ dài từ 1-20 kí tự!"),
    lastName: yup
      .string()
      .required("Vui lòng nhập tên!")
      .matches(/^[aA-zZ\s]+$/, "Có chứa ký tự không hợp lệ!")
      .min(1, "Độ dài từ 1-20 kí tự!")
      .max(20, "Độ dài từ 1-20 kí tự!"),
    email: yup
      .string()
      .email("Địa chỉ email không hợp lệ!")
      .required("Vui lòng nhập email!"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập SĐT!")
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Số điện thoại không hợp lệ!"),
    gender: yup
     .string()
     .required("Chọn giới tính!")



  });
  const onSubmit = data => {
      data.birthday = selectedDate;
      data.gender = selectedGender;
      console.log(data)
    
  };

  const { register, control, handleSubmit, formState: { errors } } = UseForm({ resolver: yupResolver(schema) });
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

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container column rowSpacing={1} direction="column">
              <Grid item container
                direction="row" spacing={1} xs="12">
                <Grid item xs="6"><TextField
                  fullWidth
                  id="firstName"
                  label="Họ"
                  name="firstName"
                  autoComplete="firstName"
                  {...register('firstName')}
                  FormHelperTextProps={{ style: { color: 'red' } }}
                  helperText={errors.firstName?.message}
                /></Grid>
                <Grid item xs="6">
                  <TextField

                    fullWidth
                    name="lastName"
                    label="Tên"
                    id="lastName"
                    {...register('lastName')}
                    FormHelperTextProps={{ style: { color: 'red' } }}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
              </Grid>
              <Grid item xs="6" >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker value={selectedDateMUIformated}
                    onChange={(date) => { getselectedDateMUIformated(date); getSelectedDate(moment(date).format('DD-MM-yyyy')); }}
                    label="Sinh nhật"
                    format='dd-MM-yyyy'
                  ></DatePicker>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs="2">
                <Autocomplete
                  required
                  disablePortal
                  id="genderBox"
                  options={gendersOptions}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Giới tính"  FormHelperTextProps={{ style: { color: 'red' }}} helperText ={errors.gender?.message} {...register('gender')}/>}
                  isOptionEqualToValue={(option, value) =>
                    option.gender === value.gender
                  }
                  onChange={(event, value) => {
                   
                      getGender(value.gender);
                    
                  }}
                 
                  
                />
              </Grid>
              <Grid item xs="12">
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"

                  id="email"
                  {...register('email')}
                  FormHelperTextProps={{ style: { color: 'red' } }}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs="12">
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Số điện thoại"
                  id="phoneNumber"
                  {...register('phoneNumber')}
                  FormHelperTextProps={{ style: { color: 'red' } }}
                  helperText={errors.phoneNumber?.message}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cập nhật
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}