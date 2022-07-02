import classes from "./Dialogs.module.css";
import React from "react";
import {useFormik} from "formik";

type DialogsFormPropsType = {
  addMessageHandler: (values: string) => void
}


export const DialogsForm: React.FC<DialogsFormPropsType> = ({addMessageHandler}) => {

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      addMessageHandler(values.message);
      formik.resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
            <textarea
              style={{resize: 'none'}}
              className={classes.textarea + ' ' + classes.active}
              {...formik.getFieldProps('message')}
            />
      </div>
      <div>
        <button
          type="submit"
          className={classes.add + ' ' + classes.active}
        >
          Add message
        </button>
      </div>
    </form>
  );
};