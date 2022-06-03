import React from "react";
import { useForm } from "react-hook-form";
import './SimpleForm.css';

export default function SimpleForm() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

 

  return (
  <div className="simple-controls">
      <h1>Simple Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div> 
    <label>First Name:</label>
    <input {...register('firstName', {required:true})} placeholder='First Name'/>
    {errors.firstName?.type === 'required'  && <p>"First name is required"</p>}
</div>
<div>
    <label>Last Name:</label>
    <input {...register('lastName', {required:true})} placeholder='Last Name'/>
    {errors.lastName?.type === 'required' && <p>"Last name is required"</p>}
</div>
<div>
    <label>Organisation Name:</label>
    <input {...register('orgName', {required:true})} placeholder='Organisation Name'/>
    {errors.orgName?.type === 'required' &&<p>"Organisation name is required"</p> }
   </div>
<div>
     <label>Email:</label>
    <input {...register('email', {required:true,pattern:{ value: /^\S+@\S+$/i}})} placeholder='Email'/>
    {errors.email?.type === 'required' && <p>"Email is required"</p> }
    {errors.email?.type === 'pattern' && <p>"Invalid Email Address"</p> }


</div>
<div>
    <label>Phone Number:</label>
    <input {...register('phone',{required:true,pattern:{value:/^\d{10}$/}})} placeholder='Phone Number'/>
    {errors.phone?.type==='required'&& <p>"Phone Number is required"</p> }
    {errors.phone?.type==='pattern'&& <p>"Enter valid Phone Number"</p> }
</div>

    <button className="buttons"  type="submit">Submit</button>
    </form>
   </div>
      
      

   
  );
}