import { useState } from 'react';
import { getUser, logout } from './utils/auth';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser);

  const handleLogout = () => {
    logout();
    setUser(null);
};

  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      {Boolean(user) ? (
        <Home user={user} />
      ) : (
        <LoginForm onLogin={setUser} />
      )}
    </>
  )
}
