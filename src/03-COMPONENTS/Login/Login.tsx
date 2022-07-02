import React from 'react';
import {connect} from 'react-redux';
import {logInTC, logOutTC} from "../../02-BLL/auth-reducer";
import {StoreTypeRedux, useTypedDispatch, useTypedSelector} from "../../02-BLL/store";
import {FormikErrors, useFormik} from "formik";
import {Redirect} from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";
import {IErrorType, LoginForm} from './LoginForm';

type LoginPropsType = {
  logInTC: (values: IErrorType) => void
  isAuth: boolean
}

const Login: React.FC<LoginPropsType> = ({logInTC, isAuth}) => {

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginForm logInTC={logInTC}/>
    </div>
  );
};

const mapStateToProps = (state: StoreTypeRedux) => {
  return {
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {logInTC})(Login);