import { useState } from 'react';
import { login } from '../utils/auth';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <section >
      <div >
        <h1 >
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div >
            <label >
              Username
            </label>
            <div >
              <input 
                type="text" 
                required
                value={username} 
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
          <div >
            <label >
              Password
            </label>
            <div >
              <input 
                type="password" 
                required
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          {error && (
            <div >
              <p >
                Login failed
              </p>
            </div>
          )}
          <div >
          <div >
              <button type="submit" >
                Login
              </button>
            </div> 
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
