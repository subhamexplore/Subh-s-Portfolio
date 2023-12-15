import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Project from './pages/Project';
import AboutUs from './pages/AboutUs';
import {Routes, Route} from 'react-router-dom'
import BigBoyToyz from './components/BigBoyToyz';
import Ayushtha from './components/Ayushtha';
import TastyTreat from './components/TastyTreat';
import SheafIcons from './components/SheafIcons';
import PackagingWorkshop from './components/PackagingWorkshop'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/bigBoyToyz' element={<BigBoyToyz/>}/>
      <Route path='/ayushtha' element={<Ayushtha/>}/>
      <Route path='/tastyTreat' element={<TastyTreat/>}/>
      <Route path='/sheafIcons' element={<SheafIcons/>}/>
      <Route path='/packagingWorkshop' element={<PackagingWorkshop/>}/>
    </Routes>
    </div>
  );
}

export default App;