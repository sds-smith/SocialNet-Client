import jwtDecode from 'jwt-decode';
import { signInWithGooglePopup, signOutUser } from './firebase/firebase.utils';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY;

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getUser() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export async function login() {
  const { user } = await signInWithGooglePopup();
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return;
  }
  return null;
}

export async function logout() {
  await signOutUser();
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token) {
  const jwtPayload = jwtDecode(token);
  return jwtPayload.sub;
}
