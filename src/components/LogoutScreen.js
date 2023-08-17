import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/Redux';

const LogoutScreen = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
    const handleLogout = () => {
      dispatch(logout());
    };
  
    return (
      <div>
        {isAuthenticated && (
          <div>
            <h1>User is logged in</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        {!isAuthenticated && <h1>Login Screen</h1>}
      </div>
    );
  };

  export default LogoutScreen;