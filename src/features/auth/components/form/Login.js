import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'reactstrap';

import { required, email } from "../../../../utils/validations";
import { TextField } from "../../../../common/TextField";

const Login = props => {
  const { onSubmit, handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="email"
        type="email"
        component={TextField}
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="password"
        type="password"
        component={TextField}
        label="Password"
        validate={required}
      />
      <Button type="submit">
        Log In
      </Button>
    </Form>
  )
}

export default reduxForm({
  form: 'LoginForm'
})(Login)
