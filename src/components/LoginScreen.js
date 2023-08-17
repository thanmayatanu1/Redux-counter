import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/Redux';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <h1>Login Screen</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {isAuthenticated && <h1>User is logged in</h1>}
    </div>
  );
};

export default LoginScreen;

