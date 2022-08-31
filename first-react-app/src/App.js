import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
    </Routes>
  );
};

export default App;
