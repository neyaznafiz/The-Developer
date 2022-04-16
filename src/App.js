import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Services/Services';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import Blogs from './Components/Bolgs/Blogs';
import About from './Components/Pages/About/About';
import SignUp from './Components/Pages/SignInMethod/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>

<Route path='/' element={<Home></Home>}></Route>
<Route path='/services' element={<Services></Services>}></Route>
<Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
