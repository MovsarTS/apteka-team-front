import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Auth/Home/Home";
import Contacts from "./components/Auth/Contacts/Contacts";
import Category from './components/Category/Category';
import Header from './components/Header/Header'
import MainCart from './components/MainCart/MainCart';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const App = () => {

  const token = useSelector(state => state.applicationSlice.token);

  if (token) {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/auth' element={<SignUp />} />
          <Route path='/login' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/category' element={<Category />} />
          <Route path='/alldrugs' element={<MainCart />} />
          <Route path='/category/:id' element={<MainCart />} />
        </Routes>
      </>
    )
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/auth' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/' element={<Home />}></Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/category' element={<Category />} />
        <Route path='/alldrugs' element={<MainCart />} />
        <Route path='/category/:id' element={<MainCart />} />
      </Routes>
    </>
  );
};

export default App;
