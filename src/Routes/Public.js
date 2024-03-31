// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../Components/Dashbord/Blog';
import SignInSide from '../Components/CustomerSignIn';
const PublicRoutes = () => (

  <Routes>
    <Route path="/" element={<Blog />} />
    {/* <Route path="/sign-in" element={<SignInSide />} /> */}
  </Routes>

);

export default PublicRoutes;
