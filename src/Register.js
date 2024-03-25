import React, { useState } from 'react';
 
function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };
 
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setConfirmPasswordError('');
  };
 
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };
 
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setRoleError('');
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    
 
    // Email validation
    if (!email.trim()) {
      setEmailError('Please enter your email address');
    }
 
    // Username validation
    if (!username.trim()) {
      setUsernameError('Please enter your full name');
    }
 
    // Phone validation
    if (!phone.trim()) {
      setPhoneError('Please enter your phone number');
    }
 
    // Password validation
    if (!password.trim()) {
      setPasswordError('Please enter your password');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    }
 
    // Confirm Password validation
    if (!confirmPassword.trim()) {
        setConfirmPasswordError('Please enter confirm password');
      }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    }
 
    // Role validation
    if (!role) {
      setRoleError('Please select a role');
    }
 
    
    if (!emailError && !usernameError && !phoneError && !passwordError && !confirmPasswordError && !roleError) {
       
        alert(`Email: ${email}\nUsername: ${username}\nPhone: ${phone}\nRole: ${role}`);
        
        
        setEmail('');
        setUsername('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setRole('');
      }
   
    
  };
 
  return (
    <div className="container pt-5" style={{width:"60%", left: "18%"}}>
        <div class="card shadow border ">
        <div class="card-header bg-success bg-gradient ml-0 py-4">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="py-2 text-white">Register</h2>
                </div>
            </div>
        </div>
        <div class="card-body p-4">
            <div class="row pt-3">
                <div class="col-md-12"></div>
      <form className="row" id="form" method="post" onSubmit={handleSubmit}>
        <div className="form-floating mb-3 col-md-12">
          <input
            className={`form-control ${emailError && 'is-invalid'}`}
            aria-required="true"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="ms-2 text-muted">Email</label>
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
 
        <div className="form-floating mb-3 col-md-12">
          <input
            className={`form-control ${usernameError && 'is-invalid'}`}
            aria-required="true"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label className="ms-2 text-muted">Full Name</label>
          {usernameError && <div className="invalid-feedback">{usernameError}</div>}
        </div>
 
        <div className="form-floating mb-3 col-md-12">
          <input
            className={`form-control ${phoneError && 'is-invalid'}`}
            aria-required="true"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <label className="ms-2 text-muted">Phone Number</label>
          {phoneError && <div className="invalid-feedback">{phoneError}</div>}
        </div>
 
        <div className="form-floating mb-3 col-md-12">
          <input
            type="password"
            className={`form-control ${passwordError && 'is-invalid'}`}
            aria-required="true"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="ms-2 text-muted">Password</label>
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </div>
 
        <div className="form-floating mb-3 col-md-12">
          <input
            type="password"
            className={`form-control ${confirmPasswordError && 'is-invalid'}`}
            aria-required="true"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <label className="ms-2 text-muted">Confirm Password</label>
          {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
        </div>
 
        <div className="form-floating mb-3 col-md-12">
          <select
            className={`form-select ${roleError && 'is-invalid'}`}
            aria-required="true"
            id="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="" disabled>Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <label className="ms-2 text-muted">Role</label>
          {roleError && <div className="invalid-feedback">{roleError}</div>}
        </div>
 
        <div className="col-12">
          <button type="submit" className="w-100 btn btn-lg btn-outline-success" >
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
</div>
  );
};
 
export default Register;
