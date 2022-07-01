import {useTypedDispatch, useTypedSelector} from "../../Redux/redux-store";
import {useFormik} from "formik";
import {setLoggedInTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";
import React from "react";

export const LoginForm = () => {
  type ErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean,
  }

  const isAuth = useTypedSelector(state => state.auth.isAuth)
  const dispatch = useTypedDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors: ErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 4) {
        errors.password = 'Must be 4 characters or more';
      }
      return errors;
    },

    onSubmit: values => {
      dispatch(setLoggedInTC(values))
      formik.resetForm()
    },
  });

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent={'center'}>
          <Grid item justifyContent={'center'}>
            <FormControl>
              <FormLabel>
                <p>To log in get registered
                  <a href={'https://social-network.samuraijs.com/'}
                     target={'_blank'}> here
                  </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
              </FormLabel>
              <FormGroup>
                <TextField
                  label="Email"
                  margin="normal"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}
                <FormControlLabel
                  label={'Remember me'}
                  control={<Checkbox/>}
                  {...formik.getFieldProps('rememberMe')}
                />
                <Button
                  type={'submit'}
                  variant={'contained'}
                  color={'primary'}
                >
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};