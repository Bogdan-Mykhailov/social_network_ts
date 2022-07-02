import classes from "./MyPosts.module.css";
import React from "react";
import {useFormik} from "formik";

type MyPostsFormPropsType = {
  addPostHandler: (values: string) => void
}

export const MyPostsForm: React.FC<MyPostsFormPropsType> = ({addPostHandler}) => {

  const formik = useFormik({
    initialValues: {
      post: '',
    },
    onSubmit: values => {
      addPostHandler(values.post);
      formik.resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
            <textarea
              style={{resize: 'none'}}
              className={classes.textarea + ' ' + classes.active}
              {...formik.getFieldProps('post')}
            />
      </div>
      <div>
        <button
          type="submit"
          className={classes.add + ' ' + classes.active}>
          Add post
        </button>
      </div>
    </form>
  );
};