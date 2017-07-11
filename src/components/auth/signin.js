import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password)
  }

  renderInput(field) {
    if(!field.className) { field.className = "form-control" }
    if(!field.type) { field.type = "text" }

    return (
      <Field name={field.name} id={field.name} type={field.type} className={field.className} component="input" />
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
      <label>Email:</label>
      {this.renderInput({ name: "email", type: "email" })}
      </fieldset>
      <fieldset className="form-group">
      <label>Password:</label>
      {this.renderInput({ name: "password", type: "password" })}
      </fieldset>
      <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

const reduxFormSettings = {
  form: 'signin'
}

export default reduxForm(reduxFormSettings)(Signin)
