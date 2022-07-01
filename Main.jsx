import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from '../Components/Home';
import Settings from '../Components/Settings';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={(<Navigate to='/home'/>)} />
      <Route path='/home' element={<Home/>} />
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  );
}

export default Main;