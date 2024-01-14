import { useState } from 'react';
import { getUser, logout } from './utils/auth';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import NavBar from './components/Nav/NavBar';
import { UserProvider } from './context/user-context';

export default function App() {
  const [user, setUser] = useState(getUser);

  const handleLogout = () => {
    logout();
    setUser(null);
};

  return (
    <UserProvider>
      <NavBar user={user} onLogout={handleLogout} />
      {Boolean(user) ? (
        <Home user={user} />
      ) : (
        <LoginForm onLogin={setUser} />
      )}
    </UserProvider>
  )
}
