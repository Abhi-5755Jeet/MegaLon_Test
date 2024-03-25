import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SignInForm() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(false); 

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Sign in successful');
        setSignInSuccess(true); 
        navigate('/Restros');
      } else {
        console.error('Sign in failed');
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error.message);
    }
  };


  return (
    <div>
      {signInSuccess ? (
        <Items />
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}


const Items = () => {
  return <div>Items Component</div>;
};

export default SignInForm;
