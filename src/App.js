import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import FormInput from './Components/FormikForm/FormikForm';
import FinalForm from './Components/FinalForm/FinalForm';
import SimpleForm from './Components/SimpleForm/SimpleForm';
const App = () => {
  return(
    <BrowserRouter>
    <div className='header-control'>
      <button className='formik-button'><Link to='/formik'>Formik Form</Link> </button>
      <button className='simple-button'><Link to='/simple'>Simple Form</Link>  </button>
      <button className='final-button'><Link to='/final'>Final Form</Link> </button>
    </div>
    <Routes>
      <Route path='/formik' element={<FormInput/>}/>
      <Route path='/final' element={<FinalForm/>}/>
      <Route path='/simple' element={<SimpleForm/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;

       

