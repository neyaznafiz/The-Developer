

import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Services/Services';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import Blogs from './Components/Bolgs/Blogs';
import About from './Components/Pages/About/About';
import SignUp from './Components/Pages/SignInMethod/SignUp/SignUp';
import Login from './Components/Pages/SignInMethod/Login/Login';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
