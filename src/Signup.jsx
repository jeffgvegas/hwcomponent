import React from 'react';

const Signup = (props) => {
  return (
    <div className="container">
    <form className="userForm">
      <h1>New User</h1>
      <div className="userName">
        <label>First Name</label>
        <input type="text" name="firstName" required />
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div>
      <div className="userEmail">
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>
      <div className="userPass">
        <label>Password 🔐</label>
        <input type="password" name="password1"/>
      </div>
      <div className="passConfirm">
        <label>Re-enter Password</label>
        <input type="password" name="password2"/>
      </div>
      <div className="subBtn">
      <button className="submitBtn" type="submit">Sign Up</button>
      </div>    
    </form>
    </div>
  )
}
export default Signup;