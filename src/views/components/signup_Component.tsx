import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export type IProps = {};

interface Values {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignupComponent: React.FC<IProps> = ({}) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("حساب کاربری یا شماره همراه را وارد کنید"),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید حدلقل 8 حرف و تشکیل شده از حروف بزرگ و کوچک و عدد و یکی از کاراکتر های مجاز باشد"
      ),
    confirmPassword: Yup.string()
      .required("")
      .oneOf([Yup.ref("password"), null], "رمز عبور هم خوانی ندارد"),
  });
  const initialValues: Values = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      className="form-control"
      {...{ initialValues, validationSchema, validateOnMount: true }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {}}
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
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="input-three"
                placeholder="تکرار رمز عبور"
              />
            </div>
            <div className="errorMessage">
              <span>
                <ErrorMessage name="username" />
              </span>
              <span>
                <ErrorMessage name="password" />
              </span>
              <span>
                <ErrorMessage name="confirmPassword" />
              </span>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center mt-4 link-Container ">
              <button type="submit" disabled={!isValid}>
                ثبت نام
              </button>
              <Link to="/login" className="login-Code-link">
                بازگشت
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupComponent;
