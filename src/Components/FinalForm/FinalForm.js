import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import './FinalForm.css'
const onSubmit = ( values) => {
  console.log(values);
 
}

 function FinalForm() {

  return (
    <div className='form-controls' >
      <h1>React Final Form</h1>
       <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.fname) {
          errors.fname = 'Required'
        }
        if (!values.lname) {
          errors.lname = 'Required'
        }
        if (!values.orgname) {
          errors.orgname = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required'
        }
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.phone) {
          errors.phone = 'Required'
        } else if (!/^\d{10}$/.test(values.phone))
        {
          errors.phone='Enter Valid Phone Number';
        }
        
        return errors
      }}
      render={({ handleSubmit, form, submitting, values }) => (
 
        <form onSubmit={handleSubmit} >
          <Field name="fname">
            {({ input, meta }) => (
              < div className='form-control'>
                <label>First Name</label>
        
                <input {...input} type="text" placeholder='First Name' />
                {meta.error && meta.touched && <p>{meta.error}</p>}
              </div>
            )}
          </Field>
          <Field name="lname">
            {({ input, meta }) => (
             <div className='form-control'>
                <label>Last Name</label>
                <input {...input} type="text" placeholder='Last Name' />
                {meta.error&&meta.touched&&<p>{meta.error}</p>}
                </div>
            )}
          </Field>
          <Field name="orgname">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Organisation Name</label>
                <input {...input} type="text" placeholder='Organisation Name' />
                {meta.error&&meta.touched&&<p>{meta.error}</p>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Email</label>
                <input {...input} type="email" placeholder='Email'/>
                {meta.error && meta.touched && <p>{meta.error}</p>}
              </div>
            )}
          </Field>
          <Field name="phone">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Phone Number</label>
                <input {...input} type="text" placeholder='Phone Number'/>
                {meta.error && meta.touched && <p>{meta.error}</p>}
              </div>
            )}
          </Field>
          
            <button className='buttons' type="submit" disabled={submitting}>
              Submit
            </button>
            
         
         
        </form> 

      )}
      
    />
   </div>
  )
}
export default FinalForm;