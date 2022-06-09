import React from 'react';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './Components/FormikForm/FormikForm';
import FinalForm from './Components/FinalForm/FinalForm';
import SimpleForm from './Components/SimpleForm/SimpleForm';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
const App = () => {
  return(
    <div className='app'>
    
    <BrowserRouter>
    <Header/>
    
    <Routes>
    
      <Route path='/formik' element={<FormInput/>}/>
      <Route path='/final' element={<FinalForm/>}/>
      <Route path='/simple' element={<SimpleForm/>}/>
      <Route path='*' element={<Navigate to='/simple'replace/>}/>
    </Routes>
    
       </BrowserRouter>
       <Footer/>
 </div>
  )
}

export default App;

       

