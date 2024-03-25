import React, { useState } from 'react';
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleLogin = () => {
  
 
    
    setEmailError('');
    setPasswordError('');
 
    
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      
    }
 
    if (!password.trim()) {
      setPasswordError('Please enter your password');
      
    }
 
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
 
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    if (email === 'admin@dotnetmastery.com' && password === 'Admin@12345') {
        alert('Login successful!'); 
      } else {
        alert('Invalid email or password'); 
      }
 
     
  };
 
  return (
    <div className="container pt-5" style={{width:"60%", left: "18%"}}>
      <div className="card shadow border ">
        <div className="card-header bg-success bg-gradient ml-0 py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="py-2 text-white">Login</h2>
            </div>
          </div>
        </div>
        <div className="card-body p-4">
          <div className="row">
            <div className="col-md-12">
              <section>
                <form method="post">
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${emailError && 'is-invalid'}`}
                      aria-required="true"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      
                    />
                    <label className="form-label">Email</label>
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${passwordError && 'is-invalid'}`}
                      aria-required="true"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      
                    />
                    <label className="form-label">Password</label>
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                  </div>
                  <div className="checkbox mb-3">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-label"> Remember Me </label>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-success"
                      onClick={handleLogin}
                    >
                      Log in
                    </button>
                  </div>
                  <div className="d-flex justify-content-between pt-2">
                    <p>
                      <a href="/Front">Forgot your password?</a>
                    </p>
                    <p>
                      <a href="/Register">Register as a new user</a>
                    </p>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Login;
