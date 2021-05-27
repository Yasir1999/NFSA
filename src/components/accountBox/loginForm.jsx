import { useFormik } from "formik";
import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });



export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);


  const onSubmit = (values) => {
    alert(JSON.stringify(values));


  };


  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });



  return (
    <BoxContainer>
      <FormContainer onSubmit={formik.handleSubmit}>
      <FieldContainer>
      <Input name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
      </FieldContainer>
      <FieldContainer>
      <Input  name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
      </FieldContainer>
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
    

      <MutedLink href="#" onClick={switchToSignup}>
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}