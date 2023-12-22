import Cookies from 'js-cookie';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory(); 

export function isCookiePresent(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2;
}

export const handleLogout = () => {
  Cookies.remove('username');
  Cookies.remove('progress');
  Cookies.remove('TEST-AUTH');
  history.push('/'); 
  window.location.reload();
};
