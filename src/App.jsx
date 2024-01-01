import { useState } from 'react';
import { getUser, logout } from './utils/auth';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';

export default function App() {
  const [user, setUser] = useState(getUser);

  const handleLogout = () => {
    logout();
    setUser(null);
};

  return (
    <>
      {Boolean(user) ? (
        <Chat user={user} handleLogout={handleLogout}/>
      ) : (
        <LoginForm onLogin={setUser} />
      )}
    </>
  )
}
