
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search';
import Home from './pages/Home';


function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Search /> } />
        <Route path='/search/:search' element={ <Home /> } />

      </Routes>
    </BrowserRouter>





  );
}

export default App;
