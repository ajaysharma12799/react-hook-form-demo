import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import './App.css';

const App = () => {
  const [userInfo, setUserInfo] = useState();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onFormSubmit = (data) => {
    setUserInfo(data);
  }
  return (
    <React.Fragment>
      <div className="Container">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
          <h1>Registration Form</h1>
          <div className="form-Control">
            <input type="text" placeholder="Username" name="username" {...register('username', {required: "Please Enter Username"})} />
          </div>
          <p className="error">{errors.username?.message}</p>
          <div className="form-Control">
            <input type="email"  placeholder="Email" name="email" {...register('email', {required: "Please Enter Email"})} />
          </div>
          <p className="error">{errors.email?.message}</p>
          <div className="form-Control">
            <input type="password"  placeholder="Password" name="password" {...register('password', {required: "Please Enter Password", minLength: {value: 4, message: "Password Should be More than 4 Characters"}, maxLength: {value: 10, message: "Password Should Not be More than 10 Characters"}})} />
          </div>
          <p className="error">{errors.password?.message}</p>
          <div className="form-Control">
            <input type="text" placeholder="PhoneNumber" name="phonenumber" {...register('phonenumber', {required: "Please Enter Phone Number", minLength: {value: 10, message: "Phone Number Should Not be Less than 10 Digits"}, maxLength: {value: 10, message: "Phone Number Should Not be More than 10 Digits"}})} />
          </div>
          <p className="error">{errors.phonenumber?.message}</p>
          <div className="form-Control">
            <input type="text" placeholder="Designation" name="designation" {...register('designation', {required: "Please Enter Designation"})} />
          </div>
          <p className="error">{errors.designation?.message}</p>
          <div className="submit-button">
            <button type="submit" className="btn">Validate</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default App
