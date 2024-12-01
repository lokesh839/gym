import React from 'react'
import './App.css';

 import{Route,Routes} from 'react-router-dom';
 import{Box} from '@mui/material';
import Navbar from './Compontes/Navbar';
import Home from './Pages/Home';
import ExerciesDetail from './Pages/ExerciesDetail';
import Footer from './Compontes/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{ width:{ xl:'1488px'}}} m="auto">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercisedetail/:id' element={<ExerciesDetail/>}/>         


          </Routes>
          <Footer/>
    </Box>
  )
}

export default App