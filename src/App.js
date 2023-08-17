import Counter from './components/Counter';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LoginScreen from './components/LoginScreen';
// import LogoutScreen from './components/LogoutScreen';



function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      
        {/* <Route exact path="/">
          {isAuthenticated ? <LogoutScreen /> : <LoginScreen />} */}
          <Counter />
        {/* </Route> */}
      
    </div>
  );
};
  
 

export default App;