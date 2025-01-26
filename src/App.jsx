import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cards from './pages/Cards';
import Header from './pages/Header';
import Foooter from './pages/Footer';
import Subcatwedding from './pages/subcat-wedding';
import Subcathome from './pages/subcat-home';
import Subcatbusiness from './pages/subcat-business';
import Subcateducation from './pages/subcat-education';
import LoanCalculator from './pages/calculator';
import Form from './pages/form';
import UserForm from './pages/userform';

function App() {


  return (
  <Router>
      
<Header/>
      <Routes>
          
          <Route path="/" element={<Cards />} />
          <Route path="/weddingload" element={<Subcatwedding />} />
         
          <Route path="/homeload" element={<Subcathome />} />
          <Route path="/businessload" element={<Subcatbusiness />} />
          <Route path="/educationload" element={<Subcateducation />} />
          <Route path="/calculate" element={<LoanCalculator />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/UserForm" element={<UserForm />} />

      
        </Routes>
    <Foooter/>




    
    </Router>
  )
}

export default App
