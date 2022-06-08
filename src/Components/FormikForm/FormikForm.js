import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
// import './FormikForm.css'
function FormInput() {
   
  return (
    <div>
       <Formik initialValues={{fname:"",lname:"",orgname:"",email:"",phone:"" }}
       validate={values => {
        const errors = {};
        if(!values.fname){
            errors.fname='Required';
        } 
        if(!values.lname){
            errors.lname='Required'
        }
        if(!values.orgname){
            errors.orgname='Required'
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.phone){
            errors.phone= 'Required'
        }else if (
          !/^\d{10}$/.test(values.phone)
        ){
          errors.phone ='Enter Valid Phone Number';
        }
        return errors;
      }}
   
    onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        
     console.log(values);
    }}
>
{({ isSubmitting }) => (
  <div className='form-controls'>
      <Form>
        <h1>Formik Form</h1>
        <div className="form-control">
        <label>First Name:</label>
        <Field name='fname' type='text' placeholder='First Name'/>
        <ErrorMessage className='error-msg'  name="fname" component="div" />
        </div>
<div className="form-control">
        <label>Last Name:</label>
        <Field name='lname' type='text' placeholder='Last Name'/>
        <ErrorMessage className='error-msg' name="lname" component= 'div' />
        </div>
        <div className="form-control">
         <label>Organisation Name:</label>
        <Field name='orgname' type='text' placeholder='Organisation Name' />
        <ErrorMessage className='error-msg' name="orgname" component="div" />
        </div>
        <div className="form-control">
        <label>Email:</label>
        <Field name='email' type='email' placeholder='Email'  />
        <ErrorMessage  className='error-msg' name="email" component="div" />
        </div>
        <div className="form-control">
        <label>Phone Number:</label>
        <Field name='phone' type='text' placeholder='Phone Number'/>
        <ErrorMessage className='error-msg' name="phone" component="div" />
        </div>
     
       <button type="submit" className='buttons'>Submit</button>
     
      </Form>
      </div>
)}
    </Formik>
    </div>

  )
}

export default FormInput
