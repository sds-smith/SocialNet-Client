import { useContext } from 'react';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import NavBar from './components/Nav/NavBar';
import { UserContext } from './context/user-context';

export default function App() {
  const { authUserExists } = useContext(UserContext);

  return (
    <>
      <NavBar />
      {authUserExists ? (
        <Home />
      ) : (
        <LoginForm />
      )}
    </>

  )
}
