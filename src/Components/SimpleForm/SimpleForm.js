import React from "react";
import { useForm } from "react-hook-form";


export default function SimpleForm() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

 

  return (
      
  <div className="form-controls">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Simple Form</h1>
    
    <div className="form-control"> 
    <label>First Name:</label>
    <input {...register('firstName', {required:true})} placeholder='First Name'/>
    {errors.firstName?.type === 'required'  && <p>Required</p>}
</div>

<div className="form-control">
    <label>Last Name:</label>
    <input {...register('lastName', {required:true})} placeholder='Last Name'/>
    {errors.lastName?.type === 'required' && <p>Required</p>}
</div>
<div className="form-control">
    <label>Organisation Name:</label>
    <input {...register('orgName', {required:true})} placeholder='Organisation Name'/>
    {errors.orgName?.type === 'required' &&<p>Required</p> }
</div>
<div className="form-control">
     <label>Email:</label>
    <input {...register('email', {required:true,pattern:{ value: /^\S+@\S+$/i}})} placeholder='Email'/>
    {errors.email?.type === 'required' && <p>Required</p> }
    {errors.email?.type === 'pattern' && <p>Invalid Email Address</p> }


</div>
<div className="form-control">
    <label>Phone Number:</label>
    <input {...register('phone',{required:true,pattern:{value:/^\d{10}$/}})} placeholder='Phone Number'/>
    {errors.phone?.type==='required'&& <p>Required</p> }
    {errors.phone?.type==='pattern'&& <p>Enter valid Phone Number</p> }
</div>

    <button className="buttons"  type="submit">Submit</button>
    </form>
   </div>
      
      

   
  );
}