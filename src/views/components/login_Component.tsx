import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

interface values {
  username: string;
  password: string;
}

const LoginComponent: React.FC = ({}) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("حساب کاربری یا شماره همراه را وارد کنید"),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید حدلقل 8 حرف و تشکیل شده از حروف بزرگ و کوچک و عدد و یکی از کاراکتر های مجاز باشد"
      ),
  });
  const initialValues: values = {
    username: "",
    password: "",
  };
  return (
    <Formik
      className="form-control"
      {...{ initialValues, validationSchema, validateOnMount: true }}
      onSubmit={(values: values, { setSubmitting }: FormikHelpers<values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isValid }) => {
        return (
          <Form>
            <div className="input-component">
              <Field
                id="username"
                name="username"
                type="text"
                className="input-one"
                placeholder="حساب کاربری با شماره همراه"
              />
              <Field
                id="password"
                name="password"
                type="password"
                className="input-two"
                placeholder="رمز عبور"
              />
            </div>
            <div className="errorMessage">
              <span>
                <ErrorMessage name="username" />
              </span>
              <span>
                <ErrorMessage name="password" />
              </span>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center mt-4 link-Container ">
              <button type="submit" disabled={!isValid}>
                ورود
              </button>
              <Link to="#" className="login-Code-link">
                ورود با رمز یکبار مصرف
              </Link>
              <Link to="/signup" className="signup-link">
                ثبت نام
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginComponent;
