import React, { Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

export const TextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <Fragment>
    <FormGroup>
      <Label for="exampleEmail">{label}</Label>
      <Input {...input} placeholder={label} type={type}/>
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </FormGroup>
  </Fragment>
)
