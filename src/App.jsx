import { useState } from 'react';
import { getUser, logout } from './utils/auth';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import NavBar from './components/Nav/NavBar';

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
